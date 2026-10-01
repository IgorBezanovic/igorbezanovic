import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pages } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { InnerContent } from "@/components/sections/inner-content";
type Props = { params: Promise<{ locale: string; page: string }> };
export const dynamicParams = false;
function isPage(value: string): value is (typeof pages)[number] {
  return pages.includes(value as (typeof pages)[number]);
}
export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}
export async function generateMetadata({ params }: Props) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isPage(page)) notFound();
  return pageMetadata(locale, page, await getDictionary(locale));
}
export default async function Page({ params }: Props) {
  const { locale, page } = await params;
  if (!isLocale(locale) || !isPage(page)) notFound();
  return (
    <InnerContent page={page} locale={locale} t={await getDictionary(locale)} />
  );
}
