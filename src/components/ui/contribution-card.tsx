import { cardAccentStyles } from "./card-styles";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import { TechnologyList } from "./technology-list";

type ContributionCardProps = {
  name: string;
  role: string;
  headline: string;
  description: string;
  detail: string;
  href: string;
  linkLabel: string;
  sourceHref?: string;
  sourceLabel?: string;
  articleHref?: string;
  technologies: string[];
};

export function ContributionCard(props: ContributionCardProps) {
  return (
    <Paper
      component="article"
      variant="outlined"
      sx={{
        p: { xs: 3, md: 4 },
        ...cardAccentStyles,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        minWidth: 0,
      }}
    >
      <Box>
        <Typography variant="overline" color="secondary">
          {props.role}
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, overflowWrap: "anywhere" }}>
          {props.name}
        </Typography>
      </Box>
      <Typography variant="h6" component="p">
        {props.headline}
      </Typography>
      <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
        {props.description}
      </Typography>
      <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
        {props.detail}
      </Typography>
      <Box sx={{ mt: "auto" }}>
        <TechnologyList technologies={props.technologies} />
      </Box>
      <Stack direction="row" spacing={3} useFlexGap sx={{ flexWrap: "wrap" }}>
        <Link href={props.href} sx={{ fontWeight: 600 }}>
          {props.linkLabel} <span aria-hidden="true">↗</span>
        </Link>
        {props.sourceHref && (
          <Link href={props.sourceHref}>
            {props.sourceLabel} <span aria-hidden="true">↗</span>
          </Link>
        )}
        {props.articleHref && (
          <Link href={props.articleHref}>
            DEV.to <span aria-hidden="true">↗</span>
          </Link>
        )}
      </Stack>
    </Paper>
  );
}
