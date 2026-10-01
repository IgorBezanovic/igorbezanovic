"use client";

import { Box, MenuItem, Select } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { isLocale, languageNames, locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={locale}
      variant="outlined"
      inputProps={{ "aria-label": label }}
      onChange={(event) => {
        const nextLocale = event.target.value;
        if (!isLocale(nextLocale)) return;
        const parts = pathname.split("/");
        parts[1] = nextLocale;
        router.push(parts.join("/"));
      }}
      renderValue={(value) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            sx={{ color: "secondary.main", flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="9" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
            <path d="M3 12h18" />
          </Box>
          <Box component="span" lang={value}>
            {languageNames[value]}
          </Box>
        </Box>
      )}
      sx={{
        minWidth: 136,
        borderRadius: "999px",
        bgcolor: "background.paper",
        fontSize: "0.8125rem",
        fontWeight: 600,
        color: "text.primary",
        boxShadow: "inset 0 1px 0 rgb(255 255 255 / 8%)",
        transition: "background-color 160ms ease, box-shadow 160ms ease",
        "& .MuiSelect-select": {
          py: 1.25,
          pl: 1.5,
          pr: "34px !important",
          minHeight: "22px !important",
          display: "flex",
          alignItems: "center",
        },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
        "&:hover": { bgcolor: "action.hover" },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "secondary.main",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "secondary.main",
        },
        "& .MuiSelect-icon": { color: "secondary.main", right: 10 },
        "& .MuiSelect-select:focus-visible": {
          outline: "2px solid var(--mui-palette-secondary-main)",
          outlineOffset: 3,
          borderRadius: "999px",
        },
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
      }}
      MenuProps={{
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
        slotProps: {
          paper: {
            sx: {
              mt: 1,
              minWidth: 208,
              borderRadius: "20px",
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              backgroundImage: "none",
              boxShadow: "0 12px 36px rgb(0 0 0 / 12%)",
              "& .MuiMenu-list": { p: 0.75 },
              "@media (prefers-reduced-motion: reduce)": {
                transition: "none !important",
              },
            },
          },
        },
      }}
    >
      {locales.map((language) => (
        <MenuItem
          key={language}
          value={language}
          sx={{
            gap: 1.25,
            minHeight: 44,
            borderRadius: "14px",
            px: 1.25,
            my: 0.25,
            fontSize: "0.875rem",
            "&.Mui-selected": {
              bgcolor: "action.selected",
              color: "secondary.main",
              fontWeight: 600,
            },
            "&.Mui-selected:hover": { bgcolor: "action.selected" },
            "&.Mui-focusVisible": {
              outline: "2px solid var(--mui-palette-secondary-main)",
              outlineOffset: -2,
            },
          }}
        >
          <Box
            component="span"
            aria-hidden="true"
            sx={{
              width: 30,
              height: 30,
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              bgcolor: "background.default",
              color: "text.secondary",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {language.toUpperCase()}
          </Box>
          <Box component="span" lang={language} sx={{ flex: 1 }}>
            {languageNames[language]}
          </Box>
          <Box
            component="svg"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
            sx={{ opacity: language === locale ? 1 : 0 }}
          >
            <path d="m4 10 4 4 8-8" />
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
