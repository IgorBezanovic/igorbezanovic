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
export const caseStudyPages = [
  "enterprise-device-management",
  "serverless-modernization",
  "marketplace-product",
] as const;
export type CaseStudyPage = (typeof caseStudyPages)[number];
export function isCaseStudyPage(page: string): page is CaseStudyPage {
  return caseStudyPages.includes(page as CaseStudyPage);
}
export const pages = [
  ...caseStudyPages,
  "experience",
  "ask-for-project",
  "contact-me",
  ...servicePages,
] as const;
export type Page = "home" | (typeof pages)[number];
export function pagePath(locale: string, page: Page = "home") {
  return `/${locale}${page === "home" ? "" : `/${page}`}`;
}
