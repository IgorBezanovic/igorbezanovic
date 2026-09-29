import Link from "next/link";
import { Container } from "@mui/material";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { pagePath, profile } from "@/lib/site";
import { LanguageSwitcher } from "./language-switcher";
export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <Container maxWidth="lg" className="header-inner">
        <Link href={pagePath(locale)} className="brand">
          {profile.name}
          <span className="brand-dot">.</span>
        </Link>
        <nav aria-label={t.home}>
          <Link href={pagePath(locale)}>{t.home}</Link>
          <Link href={pagePath(locale, "experience")}>{t.experience}</Link>
          <Link href={pagePath(locale, "ask-for-project")}>{t.project}</Link>
          <Link href={pagePath(locale, "contact-me")}>{t.contact}</Link>
        </nav>
        <LanguageSwitcher locale={locale} label={t.languageLabel} />
      </Container>
    </header>
  );
}
