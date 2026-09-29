import { cardAccentStyles } from "./card-styles";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { TechnologyList } from "./technology-list";

type ExperienceCardProps = {
  title: string;
  focus: string;
  highlights: string[];
  technologies: string[];
};

export function ExperienceCard({
  title,
  focus,
  highlights,
  technologies,
}: ExperienceCardProps) {
  return (
    <Paper
      component="article"
      variant="outlined"
      sx={{ ...cardAccentStyles, p: { xs: 3, md: 4 }, height: "100%" }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="primary">
            {focus}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: 24, md: 28 }, mt: 1, lineHeight: 1.25 }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          component="ul"
          sx={{
            pl: 2.5,
            m: 0,
            color: "text.secondary",
            "& li + li": { mt: 2 },
          }}
        >
          {highlights.map((highlight) => (
            <Typography component="li" key={highlight} sx={{ lineHeight: 1.8 }}>
              {highlight}
            </Typography>
          ))}
        </Box>
        <TechnologyList technologies={technologies} />
      </Stack>
    </Paper>
  );
}
