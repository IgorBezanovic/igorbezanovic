import { Paper, Typography } from "@mui/material";
import { cardAccentStyles } from "./card-styles";
const activitySymbols: Record<string, string> = {
  running: "🏃",
  cycling: "🚴",
  swimming: "🏊",
  weights: "🏋️",
  walking: "🚶",
  nature: "🌿",
};

export function ActivityCard({ id, label }: { id: string; label: string }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        ...cardAccentStyles,
        p: { xs: 2, sm: 3 },
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography
        component="span"
        aria-hidden="true"
        sx={{ fontSize: 28, flexShrink: 0 }}
      >
        {activitySymbols[id] ?? "☀️"}
      </Typography>
      <Typography sx={{ fontWeight: 600, overflowWrap: "anywhere" }}>
        {label}
      </Typography>
    </Paper>
  );
}
