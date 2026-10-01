import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    cssVariables: { colorSchemeSelector: "data" },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#202b26",
            light: "#4b5c54",
            dark: "#121a16",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#245d47",
            light: "#548b70",
            dark: "#173f30",
            contrastText: "#ffffff",
          },
          background: { default: "#f8f7f3", paper: "#ffffff" },
          text: { primary: "#202b26", secondary: "#626b65" },
          divider: "#dde2da",
          action: { hover: "#e8eee7", selected: "#dbe7dd" },
          error: { main: "#b43d35" },
          warning: { main: "#95651b" },
          info: { main: "#5267a8" },
          success: { main: "#245d47" },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#e6eae3",
            light: "#f8f7f3",
            dark: "#b7c3b9",
            contrastText: "#17211c",
          },
          secondary: {
            main: "#8fc7a7",
            light: "#b7dfc8",
            dark: "#62a781",
            contrastText: "#12281c",
          },
          background: { default: "#141c18", paper: "#1d2822" },
          text: { primary: "#e6eae3", secondary: "#a9b6ad" },
          divider: "#35453b",
          action: { hover: "#27392e", selected: "#344c3d" },
          error: { main: "#f29b90" },
          warning: { main: "#edbd52" },
          info: { main: "#aabbea" },
          success: { main: "#8fc7a7" },
        },
      },
    },
    typography: {
      fontFamily: "Arial, Helvetica, sans-serif",
      h1: {
        fontSize: "6.5rem",
        fontWeight: 600,
        lineHeight: 1.05,
        letterSpacing: "-0.055em",
      },
      h2: {
        fontSize: "3.2rem",
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: "-0.04em",
      },
      h3: {
        fontSize: "1.875rem",
        fontWeight: 500,
        lineHeight: 1.25,
        letterSpacing: "-0.025em",
      },
      h4: { fontSize: "2.65rem", fontWeight: 500, lineHeight: 1.3 },
      h5: { fontSize: "1.375rem", fontWeight: 600, lineHeight: 1.4 },
      h6: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.5 },
      subtitle1: { fontSize: "1.25rem", lineHeight: 1.7 },
      body1: { fontSize: "1.0625rem", lineHeight: 1.8 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiContainer: {
        defaultProps: { maxWidth: false },
        styleOverrides: { root: { maxWidth: 1400 } },
      },
      MuiButton: {
        defaultProps: { disableElevation: true, color: "secondary" },
        styleOverrides: { root: { padding: "12px 22px" } },
      },
      MuiSwitch: { defaultProps: { color: "secondary" } },
    },
  }),
  { factor: 2.5, disableAlign: true },
);
