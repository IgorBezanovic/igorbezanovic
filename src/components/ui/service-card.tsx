import { cardAccentStyles } from "./card-styles";
import { Paper, Typography } from "@mui/material";
export function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Paper variant="outlined" sx={{ ...cardAccentStyles, p: 4, flex: 1 }}>
      <Typography color="secondary" variant="overline">
        {number}
      </Typography>
      <Typography variant="h3" sx={{ mt: 3, mb: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Paper>
  );
}
