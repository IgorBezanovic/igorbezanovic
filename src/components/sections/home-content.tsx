import { Stack } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath } from "@/lib/site";
import { Section } from "../ui/section";
import { PageHeading } from "../ui/page-heading";
import { ActionLink } from "../ui/action-link";
import { WorkOverview } from "./home/work-overview";
import { WorkingApproach } from "./home/working-approach";
import { BeyondCode } from "./home/beyond-code";
import { PublicContributions } from "./public-contributions";
import { ProjectCta } from "./project-cta";
export function HomeContent({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <>
      <Section>
        <PageHeading
          eyebrow={t.role}
          title={t.heroTitle}
          description={t.intro}
        />
        <Stack
          direction="row"
          useFlexGap
          spacing={2}
          sx={{ mt: 5, flexWrap: "wrap" }}
        >
          <ActionLink href={pagePath(locale, "ask-for-project")}>
            {t.project} ↗
          </ActionLink>
          <ActionLink href={pagePath(locale, "experience")} variant="outlined">
            {t.explore}
          </ActionLink>
        </Stack>
      </Section>
      <WorkOverview locale={locale} t={t} />
      <WorkingApproach content={t.homeContent} />
      <PublicContributions content={t.experienceContent.contributions} />
      <BeyondCode content={t.homeContent} />
      <ProjectCta locale={locale} t={t} />
    </>
  );
}
