import { Box, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath, profile } from "@/lib/site";
import { Section } from "../ui/section";
import { PageHeading } from "../ui/page-heading";
import { ActionLink } from "../ui/action-link";
import { EngineeringWork } from "./engineering-work";
import { BeyondCode } from "./home/beyond-code";

export function HomeContent({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <>
      <Section>
        <div className="portfolio-hero">
          <div>
            <PageHeading
              title={t.heroTitle.split(/(\bIgor\b)/).map((part, index) =>
                part === "Igor" ? (
                  <Box
                    key={index}
                    component="span"
                    sx={{ color: "secondary.main" }}
                  >
                    {part}
                  </Box>
                ) : (
                  part
                ),
              )}
              description={t.intro}
            />
            <div className="journey-actions">
              <ActionLink href={pagePath(locale, "experience")}>
                {t.work.viewWork}
              </ActionLink>
              <ActionLink
                href={pagePath(locale, "ask-for-project")}
                variant="outlined"
              >
                {t.work.discussProject}
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>
      <EngineeringWork locale={locale} content={t.work} />
      <Section id="leadership">
        <div className="summary-layout">
          <Typography component="h2" variant="h2">
            {t.work.leadershipTitle}
          </Typography>
          <div>
            <Typography variant="subtitle1" component="p" sx={{ mb: 3 }}>
              {t.work.leadershipDescription}
            </Typography>
            <Typography color="text.secondary">
              {t.experienceContent.collaborationParagraphs[2]}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <ActionLink href={pagePath(locale, "experience")} variant="text">
                {t.explore}
              </ActionLink>
            </Box>
          </div>
        </div>
      </Section>
      <Section id="technical-strengths">
        <Typography component="h2" variant="h2" sx={{ mb: 5 }}>
          {t.work.strengths}
        </Typography>
        <div className="strengths-grid">
          {t.homeContent.areas.map((area) => (
            <section key={area.title}>
              <Typography component="h3" variant="h3" sx={{ mb: 2 }}>
                {area.title}
              </Typography>
              <ul>
                {area.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
      <Section id="working-approach">
        <div className="summary-layout">
          <Typography component="h2" variant="h2">
            {t.work.approachTitle}
          </Typography>
          <div>
            <Typography variant="subtitle1" component="p">
              {t.work.approachDescription}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <ActionLink
                href={pagePath(locale, "ask-for-project")}
                variant="text"
              >
                {t.work.choose}
              </ActionLink>
            </Box>
          </div>
        </div>
      </Section>
      <BeyondCode
        content={{
          personalLabel: t.homeContent.personalLabel,
          personalTitle: t.homeContent.personalTitle,
          personalDescription: t.homeContent.personalDescription,
          togetherLabel: t.homeContent.togetherLabel,
          activities: t.homeContent.activities,
          personalNoteTitle: t.homeContent.personalNoteTitle,
          personalNote: t.homeContent.personalNote,
        }}
      />
      <Section id="contact">
        <div className="final-contact">
          <Typography component="h2" variant="h2">
            {t.contactTitle}
          </Typography>
          <Typography color="text.secondary">{t.contactDescription}</Typography>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="journey-actions">
            <ActionLink
              href={pagePath(locale, "experience")}
              variant="outlined"
            >
              {t.explore}
            </ActionLink>
            <ActionLink href={pagePath(locale, "ask-for-project")}>
              {t.work.discussProject}
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
