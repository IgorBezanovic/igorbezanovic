import { Box, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { contributions } from "@/content/contributions";
import { ContributionCard } from "../ui/contribution-card";
import { Section } from "../ui/section";

export function PublicContributions({
  content,
}: {
  content: Dictionary["experienceContent"]["contributions"];
}) {
  return (
    <Section id="public-contributions">
      <Typography variant="h2" sx={{ mb: 2 }}>
        {content.title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4, fontSize: 20 }}>
        {content.intro}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 3,
        }}
      >
        {content.items.map((item) => (
          <ContributionCard
            key={item.id}
            {...contributions[item.id]}
            {...item}
          />
        ))}
      </Box>
    </Section>
  );
}
