import { Box, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { experienceTechnologies } from "@/content/experience";
import { ExperienceCard } from "../ui/experience-card";
import { Section } from "../ui/section";
import { PublicContributions } from "./public-contributions";
import { EngineeringWork } from "./engineering-work";

export function ExperienceContent({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary;
}) {
  const content = t.experienceContent;
  return (
    <>
      <EngineeringWork locale={locale} content={t.work} />
      <Section>
        <Typography component="h2" variant="h2" sx={{ mb: 4 }}>
          {content.workTitle}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 3,
          }}
        >
          {content.cards
            .filter(
              (card) => card.id === "commerce" || card.id === "hospitality",
            )
            .map((card) => (
              <ExperienceCard
                key={card.id}
                title={card.title}
                focus={card.focus}
                highlights={card.highlights}
                technologies={experienceTechnologies[card.id] ?? []}
              />
            ))}
        </Box>
      </Section>
      <Section>
        <Stack spacing={3} sx={{ maxWidth: 850 }}>
          <Typography component="h2" variant="h2">
            {t.work.leadershipTitle}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {t.work.leadershipDescription}
          </Typography>
          {content.collaborationParagraphs.map((paragraph) => (
            <Typography key={paragraph} color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Section>
      <PublicContributions content={content.contributions} />
    </>
  );
}
