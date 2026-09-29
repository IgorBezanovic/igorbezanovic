import { Stack, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath } from "@/lib/site";
import { Section } from "../ui/section";
import { ActionLink } from "../ui/action-link";
export function ProjectCta({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <Section>
      <Stack
        spacing={3}
        sx={{
          p: { xs: 3, md: 6 },
          bgcolor: "#e8eee7",
          borderRadius: 3,
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h2">{t.ctaTitle}</Typography>
        <Typography color="text.secondary">{t.ctaDescription}</Typography>
        <ActionLink href={pagePath(locale, "ask-for-project")}>
          {t.project} ↗
        </ActionLink>
      </Stack>
    </Section>
  );
}
