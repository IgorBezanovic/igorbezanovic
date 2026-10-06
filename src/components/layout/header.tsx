import Link from "next/link";
import { Container, Stack } from "@mui/material";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { pagePath } from "@/lib/site";
import { BrandLogo } from "@/components/ui/brand-logo";
import { NavigationLinks } from "./navigation-links";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <header className="site-header" id="top" tabIndex={-1}>
      <a href="#main" className="skip-link">
        {t.skip}
      </a>
      <Container className="header-inner">
        <Link href={pagePath(locale)} className="brand">
          <BrandLogo />
        </Link>
        <nav aria-label={t.home}>
          <NavigationLinks
            links={[
              { href: pagePath(locale), label: t.home },
              { href: pagePath(locale, "experience"), label: t.experience },
              { href: pagePath(locale, "ask-for-project"), label: t.project },
              { href: pagePath(locale, "contact-me"), label: t.contact },
            ]}
          />
        </nav>
        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={1}
          className="header-controls"
        >
          <ThemeSwitcher
            labels={{ light: t.theme.light, dark: t.theme.dark }}
          />
          <LanguageSwitcher locale={locale} label={t.languageLabel} />
        </Stack>
      </Container>
    </header>
  );
}
