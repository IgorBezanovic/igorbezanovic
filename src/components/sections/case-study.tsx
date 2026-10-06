import { Box, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath, type CaseStudyPage } from "@/lib/site";
import { Section } from "../ui/section";
import { PageHeading } from "../ui/page-heading";
import { ActionLink } from "../ui/action-link";
import { WorkDiagram } from "../ui/work-diagram";

const sections = [
  "context",
  "role",
  "scale",
  "decisions",
  "implementation",
  "outcome",
] as const;
export function CaseStudy({
  page,
  locale,
  t,
}: {
  page: CaseStudyPage;
  locale: Locale;
  t: Dictionary;
}) {
  const study = t.work.cases[page];
  return (
    <>
      <Section>
        <ActionLink href={pagePath(locale, "experience")} variant="text">
          {t.work.back}
        </ActionLink>
        <Box sx={{ mt: 4 }}>
          <PageHeading
            eyebrow={study.role}
            title={study.title}
            description={study.summary}
          />
        </Box>
        <Typography color="secondary" sx={{ mt: 3 }}>
          {study.scale}
        </Typography>
      </Section>
      <Section>
        <div className="case-layout">
          <article className="case-narrative">
            {sections.map((section) => (
              <section key={section} aria-labelledby={`case-${section}`}>
                <Typography
                  id={`case-${section}`}
                  component="h2"
                  variant="h3"
                  sx={{ mb: 2 }}
                >
                  {t.work[section]}
                </Typography>
                <Typography color="text.secondary">
                  {study.sections[section]}
                </Typography>
              </section>
            ))}
          </article>
          <aside className="case-aside" aria-label={t.work.diagram}>
            <WorkDiagram study={page} content={t.work} />
            <ul className="case-technologies">
              {study.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <Section>
        <div className="journey-actions">
          <ActionLink href={pagePath(locale, "experience")} variant="outlined">
            {t.explore}
          </ActionLink>
          <ActionLink href={pagePath(locale, "ask-for-project")}>
            {t.work.discussProject}
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
