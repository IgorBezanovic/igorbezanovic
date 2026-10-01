import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { resolveSiteUrl } from "../src/lib/site-url.ts";

test("indexing requires a valid public HTTPS origin and a production environment", () => {
  assert.equal(resolveSiteUrl(), undefined);
  assert.equal(resolveSiteUrl("https://example.com/"), "https://example.com");
  assert.equal(
    resolveSiteUrl("https://example.com", "production"),
    "https://example.com",
  );
  for (const environment of ["preview", "development", "staging"]) {
    assert.equal(resolveSiteUrl("https://example.com", environment), undefined);
  }
  for (const value of [
    "invalid",
    "ftp://example.com",
    "javascript:alert(1)",
    "http://example.com",
    "https://user:pass@example.com",
    "https://example.com/path",
    "https://example.com?query=1",
    "https://example.com#hash",
  ]) {
    assert.throws(() => resolveSiteUrl(value), /SITE_URL/);
  }
});

function leaves(value, prefix = "") {
  return Object.entries(value).flatMap(([key, entry]) => {
    const path = `${prefix}/${key}`;
    return entry !== null && typeof entry === "object"
      ? leaves(entry, path)
      : [[path, entry]];
  });
}

test("all six dictionaries have matching keys, types and interpolation tokens", async () => {
  const load = async (locale) =>
    JSON.parse(
      await readFile(
        new URL(`../src/i18n/messages/${locale}.json`, import.meta.url),
        "utf8",
      ),
    );
  const english = leaves(await load("en"));
  for (const locale of ["sr", "de", "it", "hu", "fr"]) {
    const actual = leaves(await load(locale));
    assert.deepEqual(
      actual.map(([key]) => key).sort(),
      english.map(([key]) => key).sort(),
      locale,
    );
    const values = new Map(actual);
    for (const [key, value] of english) {
      assert.equal(typeof values.get(key), typeof value, `${locale}: ${key}`);
      if (typeof value === "string") {
        const tokens = (text) =>
          [...text.matchAll(/\{\{?\s*([\w]+)\s*\}?\}/g)]
            .map((match) => match[1])
            .sort();
        assert.deepEqual(
          tokens(values.get(key)),
          tokens(value),
          `${locale}: ${key}`,
        );
      }
    }
  }
});
