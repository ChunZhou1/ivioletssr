import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useIsDownBreakpoint = (key: number | Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key), { noSsr: true });
};

export const useIsMobile = () => useIsDownBreakpoint("md");
