"use client";

import { IconButton, Stack, Switch, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import type { Dictionary } from "@/i18n/dictionaries";

export function ThemeSwitcher({ labels }: { labels: Dictionary["theme"] }) {
  const { mode, systemMode, setMode } = useColorScheme();
  const isDark = (mode === "system" ? systemMode : mode) === "dark";

  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      <span aria-hidden="true">☀</span>
      <Tooltip title={isDark ? labels.light : labels.dark}>
        <Switch
          checked={isDark}
          disabled={!mode}
          onChange={(_, checked) => setMode(checked ? "dark" : "light")}
          slotProps={{ input: { "aria-label": labels.dark } }}
        />
      </Tooltip>
      <span aria-hidden="true">☾</span>
      <Tooltip title={labels.system}>
        <span>
          <IconButton
            size="small"
            aria-label={labels.system}
            aria-pressed={mode === "system"}
            disabled={!mode}
            color={mode === "system" ? "secondary" : "default"}
            onClick={() => setMode("system")}
            sx={{ ml: 0.5 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="13" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </IconButton>
        </span>
      </Tooltip>
    </Stack>
  );
}
