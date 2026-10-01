import { Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { profile, type Page } from "@/lib/site";
import { Section } from "../ui/section";
import { PageHeading } from "../ui/page-heading";
import { ProjectForm } from "../forms/project-form";
import { ProjectCta } from "./project-cta";
import { ExperienceContent } from "./experience-content";
export function InnerContent({
  page,
  locale,
  t,
}: {
  page: Exclude<Page, "home">;
  locale: Locale;
  t: Dictionary;
}) {
  const content = {
    experience: [t.experienceTitle, t.experienceDescription],
    "ask-for-project": [t.projectTitle, t.projectDescription],
    "contact-me": [t.contactTitle, t.contactDescription],
  }[page];
  return (
    <>
      <Section>
        <PageHeading
          eyebrow={page === "experience" ? t.experienceContent.role : t.role}
          title={content[0]}
          description={content[1]}
        />
        {page === "ask-for-project" && (
          <ProjectForm
            t={{
              nameLabel: t.nameLabel,
              emailLabel: t.emailLabel,
              detailsLabel: t.detailsLabel,
              projectTitle: t.projectTitle,
              formHint: t.formHint,
              submit: t.submit,
              draftReady: t.draftReady,
            }}
          />
        )}
        {page === "contact-me" && (
          <Typography
            variant="h3"
            component="p"
            sx={{
              mt: 5,
              overflowWrap: "anywhere",
            }}
          >
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          </Typography>
        )}
      </Section>
      {page === "experience" && (
        <>
          <ExperienceContent content={t.experienceContent} />
          <ProjectCta locale={locale} t={t} />
        </>
      )}
    </>
  );
}
