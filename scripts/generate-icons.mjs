import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const svg = await readFile(new URL("src/app/icon.svg", root), "utf8");
const opaque = svg.replace(' rx="12"', "");
const maskable = opaque.replace(
  '<g fill="#e6eae3">',
  '<g fill="#e6eae3" transform="translate(6.4 6.4) scale(0.8)">',
);
await mkdir(new URL("public/icons/brand/", root), { recursive: true });

async function png(source, path, width, height = width) {
  await sharp(Buffer.from(source))
    .resize(width, height, { fit: "contain", background: "#202b26" })
    .png()
    .toFile(new URL(path, root).pathname);
}

await png(svg, "src/app/icon1.png", 96);
for (const [name, size] of [
  ["apple-icon.png", 180],
  ["apple-icon1.png", 152],
  ["apple-icon2.png", 167],
]) {
  await png(opaque, `src/app/${name}`, size);
}
await png(opaque, "public/apple-touch-icon.png", 180);
for (const size of [44, 71, 150, 192, 256, 310, 384, 512]) {
  await png(opaque, `public/icons/brand/icon-${size}.png`, size);
}
await png(opaque, "public/icons/brand/icon-310x150.png", 310, 150);
for (const size of [192, 512]) {
  await png(maskable, `public/icons/brand/maskable-${size}.png`, size);
}

// PNG-backed ICO entries preserve transparency and cover high-density displays.
const sizes = [16, 32, 48, 96, 256];
const images = await Promise.all(
  sizes.map((size) =>
    sharp(Buffer.from(svg)).resize(size, size).png().toBuffer(),
  ),
);
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + 16 * index;
  header[entry] = sizes[index] === 256 ? 0 : sizes[index];
  header[entry + 1] = header[entry];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(
  new URL("src/app/favicon.ico", root),
  Buffer.concat([header, ...images]),
);
