import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { siteUrl, pages, pagePath } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return locales.flatMap((locale) =>
    (["home", ...pages] as const).map((page) => ({
      url: `${siteUrl}${pagePath(locale, page)}`,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [l, `${siteUrl}${pagePath(l, page)}`]),
          ["x-default", `${siteUrl}${pagePath("en", page)}`],
        ]),
      },
    })),
  );
}
