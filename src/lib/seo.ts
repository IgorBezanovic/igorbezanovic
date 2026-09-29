import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { pagePath, profile, siteUrl, type Page } from "./site";
export function pageMetadata(
  locale: Locale,
  page: Page,
  t: Dictionary,
): Metadata {
  const labels = {
    home: t.role,
    experience: t.experienceTitle,
    "ask-for-project": t.projectTitle,
    "contact-me": t.contactTitle,
  };
  const descriptions = {
    home: t.seoDescription,
    experience: t.experienceDescription,
    "ask-for-project": t.projectDescription,
    "contact-me": t.contactDescription,
  };
  const title = `${labels[page]} | ${profile.name}`;
  const description = `${profile.name} — ${descriptions[page]}`;
  const url = siteUrl ? `${siteUrl}${pagePath(locale, page)}` : undefined;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
    authors: [{ name: profile.name }],
    robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
    alternates: siteUrl
      ? {
          canonical: url,
          languages: Object.fromEntries([
            ...locales.map((l) => [l, `${siteUrl}${pagePath(l, page)}`]),
            ["x-default", `${siteUrl}${pagePath("en", page)}`],
          ]),
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: profile.name,
      locale: {
        en: "en_US",
        sr: "sr_RS",
        de: "de_DE",
        it: "it_IT",
        hu: "hu_HU",
        fr: "fr_FR",
      }[locale],
      url,
      images: siteUrl
        ? [
            {
              url: `${siteUrl}/opengraph-image`,
              width: 1200,
              height: 630,
              alt: profile.name,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: siteUrl ? [`${siteUrl}/opengraph-image`] : [],
    },
  };
}
