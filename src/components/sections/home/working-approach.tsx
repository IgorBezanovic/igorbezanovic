import { Box, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "../../ui/section";
import { ServiceCard } from "../../ui/service-card";

export function WorkingApproach({
  content,
}: {
  content: Dictionary["homeContent"];
}) {
  return (
    <Section id="working-approach">
      <Typography variant="h2" sx={{ mb: 4 }}>
        {content.approachTitle}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          gap: 3,
        }}
      >
        {content.steps.map((step, index) => (
          <ServiceCard key={step.title} number={`0${index + 1}`} {...step} />
        ))}
      </Box>
    </Section>
  );
}
