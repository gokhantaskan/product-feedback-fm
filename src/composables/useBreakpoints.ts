import { useBreakpoints as useBp } from "@vueuse/core";
import { breakPoints } from "appconfig";

export function useBreakpoints() {
  const breakpoints = useBp(breakPoints);

  return {
    isMobile: breakpoints.smaller("tablet"),
    isTablet: breakpoints.between("tablet", "desktop"),
    isDesktop: breakpoints.greater("desktop"),
    isTabletOrHigher: breakpoints.greaterOrEqual("tablet"),
    current: breakpoints.current,
  };
}
