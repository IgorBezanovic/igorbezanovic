import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <Stack spacing={3} sx={{ maxWidth: 900 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          color="secondary"
          sx={{ letterSpacing: "0.16em" }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h1">{title}</Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color="text.secondary"
        sx={{ maxWidth: 660, lineHeight: 1.7 }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
