"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#245d47" },
    background: { default: "#f8f7f3", paper: "#ffffff" },
    text: { primary: "#202b26", secondary: "#626b65" },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: {
      fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.055em",
    },
    h2: {
      fontSize: "clamp(2rem, 4vw, 3.2rem)",
      fontWeight: 500,
      letterSpacing: "-0.04em",
    },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { padding: "12px 22px" } },
    },
  },
});
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
