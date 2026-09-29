import { Box, Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "../../ui/section";
import { ActivityCard } from "../../ui/activity-card";
import { cardAccentStyles } from "../../ui/card-styles";

export function BeyondCode({
  content,
}: {
  content: Dictionary["homeContent"];
}) {
  return (
    <Section id="beyond-the-code">
      <Box
        sx={{
          ...cardAccentStyles,
          borderRadius: 3,
          bgcolor: "#f0ede4",
          p: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
            gap: { xs: 4, md: 7 },
            alignItems: "center",
          }}
        >
          <Stack spacing={3}>
            <Typography variant="overline" color="primary">
              {content.personalLabel}
            </Typography>
            <Typography variant="h2">{content.personalTitle}</Typography>
            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8, fontSize: 18 }}
            >
              {content.personalDescription}
            </Typography>
          </Stack>
          <Box
            component="ul"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
              p: 0,
              m: 0,
              listStyle: "none",
            }}
          >
            {content.activities.map((activity) => (
              <Box component="li" key={activity.id}>
                <ActivityCard {...activity} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ mt: 5, pt: 4, borderTop: "1px solid #d7d7c9" }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            {content.personalNoteTitle}
          </Typography>
          <Typography color="text.secondary">{content.personalNote}</Typography>
        </Box>
      </Box>
    </Section>
  );
}
