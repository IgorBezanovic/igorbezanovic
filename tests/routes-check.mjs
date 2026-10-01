import assert from "node:assert/strict";
const base = process.argv[2] ?? "http://127.0.0.1:3100";
const origin = process.argv[3];
const indexed = Boolean(origin);
const root = await fetch(base, { redirect: "manual" });
assert.equal(root.status, 308);
assert.equal(root.headers.get("location"), "/en");
for (const locale of ["en", "sr", "de", "it", "hu", "fr"]) {
  for (const page of ["", "/experience", "/ask-for-project", "/contact-me"]) {
    const path = `/${locale}${page}`;
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    if (indexed) {
      assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`), path);
      for (const other of ["en", "sr", "de", "it", "hu", "fr"])
        assert.ok(
          html.includes(`hrefLang="${other}" href="${origin}/${other}${page}"`),
          path,
        );
      assert.ok(
        html.includes(`hrefLang="x-default" href="${origin}/en${page}"`),
        path,
      );
      assert.ok(
        html.includes(
          `property="og:image" content="${origin}/opengraph-image"`,
        ),
        path,
      );
    } else {
      assert.ok(html.includes('content="noindex, nofollow"'), path);
      assert.ok(!html.includes('rel="canonical"'), path);
    }
  }
}
for (const path of [
  "/es",
  "/en/missing",
  "/sr/missing",
  "/es/experience",
  "/en/experience/extra",
])
  assert.equal((await fetch(base + path)).status, 404, path);
const robots = await (await fetch(base + "/robots.txt")).text();
assert.ok(robots.includes(indexed ? "Allow: /" : "Disallow: /"));
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
assert.equal((sitemap.match(/<url>/g) || []).length, indexed ? 24 : 0);
if (indexed) assert.ok(sitemap.includes(origin));
const image = await fetch(base + "/opengraph-image");
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type").includes("image/png"));
const bytes = new Uint8Array(await image.arrayBuffer());
const view = new DataView(bytes.buffer);
assert.equal(view.getUint32(16), 1200);
assert.equal(view.getUint32(20), 630);
console.log(
  `PASS: 24 pages, headings, redirect, 404s, robots, sitemap, OG image (${indexed ? "production origin" : "noindex"}).`,
);
