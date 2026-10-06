import Link from "next/link";
import { Container } from "@mui/material";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { pagePath, profile } from "@/lib/site";

export function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Pick<Dictionary, "role" | "experience" | "project" | "footer">;
}) {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          <div className="footer-profile">
            <Link href={pagePath(locale)} className="footer-name">
              {profile.name}
            </Link>
            <p>{t.role}</p>
            <p>{t.footer.location}</p>
          </div>
          <nav className="footer-links" aria-label={t.footer.explore}>
            <h2>{t.footer.explore}</h2>
            <Link href={pagePath(locale, "experience")}>{t.experience}</Link>
            <Link href={pagePath(locale, "ask-for-project")}>{t.project}</Link>
          </nav>
          <nav className="footer-links" aria-label={t.footer.connect}>
            <h2>{t.footer.connect}</h2>
            <a href={`mailto:${profile.email}`}>{t.footer.email}</a>
            <a href="https://www.linkedin.com/in/igor-bezanovic/">LinkedIn</a>
            <a href="https://github.com/IgorBezanovic">GitHub</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top">
            {t.footer.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
