import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const root = new URL("../", import.meta.url);

test("every manifest icon exists and matches its advertised dimensions", async () => {
  const manifest = JSON.parse(
    await readFile(new URL("src/app/manifest.webmanifest", root), "utf8"),
  );
  for (const icon of manifest.icons) {
    const data = await readFile(new URL(`public${icon.src}`, root));
    const { width, height, format } = await sharp(data).metadata();
    assert.equal(`${width}x${height}`, icon.sizes, icon.src);
    assert.equal(format, "png", icon.src);
  }
  for (const purpose of ["any", "maskable"]) {
    for (const size of [192, 512]) {
      assert.ok(
        manifest.icons.some(
          (icon) =>
            icon.sizes === `${size}x${size}` && icon.purpose === purpose,
        ),
      );
    }
  }
});

test("maskable artwork stays inside the central safe circle on an opaque background", async () => {
  const { data, info } = await sharp(
    await readFile(new URL("public/icons/brand/maskable-512.png", root)),
  )
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const offset = (y * info.width + x) * 4;
      assert.equal(data[offset + 3], 255);
      if (data[offset] > 80) {
        assert.ok(Math.hypot(x + 0.5 - 256, y + 0.5 - 256) < 512 * 0.4);
      }
    }
  }
});

test("search favicon and Apple icons expose usable resolutions", async () => {
  const ico = await readFile(new URL("src/app/favicon.ico", root));
  assert.equal(ico.readUInt16LE(2), 1);
  const sizes = [];
  for (let index = 0; index < ico.readUInt16LE(4); index++) {
    const entry = 6 + 16 * index;
    sizes.push(ico[entry] || 256);
    const offset = ico.readUInt32LE(entry + 12);
    const length = ico.readUInt32LE(entry + 8);
    const metadata = await sharp(
      ico.subarray(offset, offset + length),
    ).metadata();
    assert.equal(metadata.width, ico[entry] || 256);
    assert.equal(metadata.height, ico[entry + 1] || 256);
  }
  assert.ok(sizes.some((size) => size > 48));
  for (const [path, size] of [
    ["src/app/icon1.png", 96],
    ["src/app/apple-icon.png", 180],
    ["src/app/apple-icon1.png", 152],
    ["src/app/apple-icon2.png", 167],
    ["public/apple-touch-icon.png", 180],
  ]) {
    const { width, height } = await sharp(
      await readFile(new URL(path, root)),
    ).metadata();
    assert.equal(width, size);
    assert.equal(height, size);
  }
});
