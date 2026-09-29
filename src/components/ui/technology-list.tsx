import { Box, Chip, Paper, Typography } from "@mui/material";
import { TechnologyIcon } from "./technology-icon";
import { cardAccentStyles } from "./card-styles";

export function TechnologyList({
  technologies,
  variant = "compact",
}: {
  technologies: string[];
  variant?: "compact" | "showcase";
}) {
  const showcase = variant === "showcase";
  return (
    <Box
      component="ul"
      sx={{
        display: showcase ? "grid" : "flex",
        gridTemplateColumns: showcase
          ? {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(6, minmax(0, 1fr))",
            }
          : undefined,
        flexWrap: "wrap",
        gap: showcase ? 2 : 1,
        p: 0,
        m: 0,
        listStyle: "none",
      }}
    >
      {technologies.map((technology) => (
        <Box component="li" key={technology} sx={{ minWidth: 0 }}>
          {showcase ? (
            <Paper
              variant="outlined"
              sx={{
                ...cardAccentStyles,
                p: 2.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                height: "100%",
                minHeight: 132,
              }}
            >
              <TechnologyIcon technology={technology} />
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "center",
                  overflowWrap: "anywhere",
                }}
              >
                {technology}
              </Typography>
            </Paper>
          ) : (
            <Chip label={technology} size="small" variant="outlined" />
          )}
        </Box>
      ))}
    </Box>
  );
}
