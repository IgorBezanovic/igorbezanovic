import { Box, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { coreTechnologies, experienceTechnologies } from "@/content/experience";
import { ExperienceCard } from "../ui/experience-card";
import { Section } from "../ui/section";
import { TechnologyList } from "../ui/technology-list";
import { PublicContributions } from "./public-contributions";

export function ExperienceContent({
  content,
}: {
  content: Dictionary["experienceContent"];
}) {
  return (
    <>
      <Section>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 850, fontSize: 20, lineHeight: 1.8, mb: 6 }}
        >
          {content.overview}
        </Typography>
        <Typography variant="h2" sx={{ mb: 4 }}>
          {content.workTitle}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 3,
          }}
        >
          {content.cards.map((card) => (
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
        <Stack spacing={4}>
          <Typography variant="h2">{content.skillsTitle}</Typography>
          <TechnologyList technologies={coreTechnologies} variant="showcase" />
        </Stack>
      </Section>
      <Section>
        <Stack spacing={6} sx={{ maxWidth: 850 }}>
          <Box>
            <Typography variant="h2" sx={{ mb: 3 }}>
              {content.collaborationTitle}
            </Typography>
            <Stack spacing={3}>
              {content.collaborationParagraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Section>
      <PublicContributions content={content.contributions} />
    </>
  );
}
