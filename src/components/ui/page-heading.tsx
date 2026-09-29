import { Stack, Typography } from "@mui/material";
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <Stack spacing={3} sx={{ maxWidth: 900 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          color="primary"
          sx={{ letterSpacing: "0.16em" }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h1">{title}</Typography>
      <Typography
        color="text.secondary"
        sx={{ fontSize: { xs: 18, md: 22 }, maxWidth: 660, lineHeight: 1.7 }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
