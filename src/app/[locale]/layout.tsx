import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AppProvider } from "@/components/providers/app-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../globals.css";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  return (
    <html lang={locale}>
      <body>
        <AppProvider>
          <Header locale={locale} t={t} />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer role={t.role} />
        </AppProvider>
      </body>
    </html>
  );
}
