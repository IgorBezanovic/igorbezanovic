import type { Locale } from "./config";
import en from "./messages/en.json";
export type Dictionary = typeof en;
const loaders = {
  en: () => import("./messages/en.json"),
  sr: () => import("./messages/sr.json"),
  de: () => import("./messages/de.json"),
  it: () => import("./messages/it.json"),
  hu: () => import("./messages/hu.json"),
  fr: () => import("./messages/fr.json"),
};
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await loaders[locale]()).default;
}
