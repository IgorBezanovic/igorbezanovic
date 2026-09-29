export const profile = {
  name: "Igor Bezanovic",
  email: "igorbezanovic@gmail.com",
};
const configuredUrl = process.env.SITE_URL;
export const siteUrl = configuredUrl
  ? new URL(configuredUrl).origin
  : undefined;
export const pages = ["experience", "ask-for-project", "contact-me"] as const;
export type Page = "home" | (typeof pages)[number];
export function pagePath(locale: string, page: Page = "home") {
  return `/${locale}${page === "home" ? "" : `/${page}`}`;
}
