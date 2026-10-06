"use client";

import { Stack, Switch, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import type { Dictionary } from "@/i18n/dictionaries";

export function ThemeSwitcher({
  labels,
}: {
  labels: Pick<Dictionary["theme"], "light" | "dark">;
}) {
  const { mode, systemMode, setMode } = useColorScheme();
  const resolvedMode = mode === "system" ? systemMode : mode;
  const isDark = resolvedMode === "dark";

  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <span aria-hidden="true">☀</span>
      <Tooltip title={isDark ? labels.light : labels.dark}>
        <Switch
          checked={isDark}
          disabled={!resolvedMode}
          onChange={(_, checked) => setMode(checked ? "dark" : "light")}
          slotProps={{
            input: {
              role: "switch",
              "aria-label": labels.dark,
            },
          }}
        />
      </Tooltip>
      <span aria-hidden="true">☾</span>
    </Stack>
  );
}
