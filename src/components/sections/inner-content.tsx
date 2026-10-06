import { Box, Paper, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath, servicePages, profile, type Page } from "@/lib/site";
import { Section } from "../ui/section";
import { PageHeading } from "../ui/page-heading";
import { InquiryForm } from "../forms/inquiry-form";
import { ProjectCta } from "./project-cta";
import { ExperienceContent } from "./experience-content";
import { ActionLink } from "../ui/action-link";
import { cardAccentStyles } from "../ui/card-styles";
export function InnerContent({
  page,
  locale,
  t,
}: {
  page: Exclude<Page, "home">;
  locale: Locale;
  t: Dictionary;
}) {
  const serviceForm = servicePages.includes(
    page as (typeof servicePages)[number],
  )
    ? t.collaboration.forms[page as keyof typeof t.collaboration.forms]
    : undefined;
  const content = serviceForm
    ? [serviceForm.title, serviceForm.description]
    : {
        experience: [t.experienceTitle, t.experienceDescription],
        "ask-for-project": [t.projectTitle, t.projectDescription],
        "contact-me": [t.contactTitle, t.contactDescription],
      }[page as "experience" | "ask-for-project" | "contact-me"];
  return (
    <>
      <Section>
        <PageHeading
          eyebrow={page === "experience" ? t.experienceContent.role : t.role}
          title={content[0]}
          description={content[1]}
        />
        {page === "ask-for-project" && (
          <Stack spacing={8} sx={{ mt: 5 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },
                gap: 3,
              }}
            >
              {t.collaboration.services.map((service) => (
                <Paper
                  key={service.id}
                  variant="outlined"
                  sx={{
                    ...cardAccentStyles,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 3,
                  }}
                >
                  <Typography variant="h3" component="h2">
                    <a href={pagePath(locale, service.page as Page)}>
                      {service.title}
                    </a>
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: "auto" }}>
                    <ActionLink
                      variant={
                        service.id === "delivery" ? "contained" : "outlined"
                      }
                      href={pagePath(locale, service.page as Page)}
                    >
                      {t.collaboration.contactLabel}
                    </ActionLink>
                  </Box>
                </Paper>
              ))}
            </Box>
            <Box sx={{ maxWidth: 860 }}>
              <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
                {t.experienceContent.collaborationTitle}
              </Typography>
              <Stack spacing={3}>
                {t.experienceContent.collaborationParagraphs.map(
                  (paragraph) => (
                    <Typography key={paragraph} color="text.secondary">
                      {paragraph}
                    </Typography>
                  ),
                )}
              </Stack>
              <Box sx={{ mt: 4 }}>
                <ActionLink
                  href={pagePath(locale, "experience")}
                  variant="outlined"
                >
                  {t.explore}
                </ActionLink>
              </Box>
            </Box>
          </Stack>
        )}
        {serviceForm && (
          <>
            <Box sx={{ mt: 3 }}>
              <ActionLink
                variant="text"
                href={pagePath(locale, "ask-for-project")}
              >
                {t.project}
              </ActionLink>
            </Box>
            <InquiryForm
              nameLabel={t.nameLabel}
              emailLabel={t.emailLabel}
              formHint={t.formHint}
              submit={t.submit}
              draftReady={t.draftReady}
              fields={serviceForm.fields}
              formTitle={serviceForm.title}
              directEmail={t.collaboration.directEmail}
            />
          </>
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
