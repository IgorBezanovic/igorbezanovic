import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { AppProvider } from "@/components/providers/app-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../globals.css";
export const dynamicParams = false;
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
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <AppProvider>
          <Header locale={locale} t={t} />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer
            locale={locale}
            t={{
              role: t.role,
              experience: t.experience,
              project: t.project,
              footer: t.footer,
            }}
          />
        </AppProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
