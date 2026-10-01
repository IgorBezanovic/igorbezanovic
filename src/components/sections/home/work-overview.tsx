import { Box, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath } from "@/lib/site";
import { Section } from "../../ui/section";
import { ServiceCard } from "../../ui/service-card";
import { ActionLink } from "../../ui/action-link";

export function WorkOverview({ locale, t }: { locale: Locale; t: Dictionary }) {
  const content = t.homeContent;
  return (
    <Section id="work-overview">
      <Stack spacing={3} sx={{ maxWidth: 800, mb: 5 }}>
        <Typography variant="overline" color="secondary">
          {content.overviewLabel}
        </Typography>
        <Typography variant="h2">{content.overviewTitle}</Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="text.secondary"
          sx={{ lineHeight: 1.8 }}
        >
          {content.overviewDescription}
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          gap: 3,
          mb: 4,
        }}
      >
        {content.areas.map((area, index) => (
          <ServiceCard key={area.title} number={`0${index + 1}`} {...area} />
        ))}
      </Box>
      <ActionLink href={pagePath(locale, "experience")} variant="outlined">
        {t.explore} ↗
      </ActionLink>
    </Section>
  );
}
