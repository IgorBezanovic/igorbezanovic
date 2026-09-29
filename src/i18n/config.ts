export const locales = ["en", "sr", "de", "it", "hu", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const languageNames: Record<Locale, string> = {
  en: "English",
  sr: "Srpski",
  de: "Deutsch",
  it: "Italiano",
  hu: "Magyar",
  fr: "Français",
};
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
