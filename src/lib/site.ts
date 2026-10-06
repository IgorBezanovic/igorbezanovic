import { resolveSiteUrl } from "./site-url";
export const profile = {
  name: "Igor Bezanovic",
  email: "igorbezanovic@gmail.com",
};
export const siteUrl = resolveSiteUrl(
  process.env.SITE_URL,
  process.env.VERCEL_ENV,
);
export const servicePages = [
  "consulting",
  "project-delivery",
  "maintenance",
  "join-team",
] as const;
export const pages = [
  "experience",
  "ask-for-project",
  "contact-me",
  ...servicePages,
] as const;
export type Page = "home" | (typeof pages)[number];
export function pagePath(locale: string, page: Page = "home") {
  return `/${locale}${page === "home" ? "" : `/${page}`}`;
}
