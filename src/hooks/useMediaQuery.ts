import { useState, useEffect } from "react";

const rootStyle = getComputedStyle(document.documentElement);
export const breakpoints = {
  mobile: rootStyle.getPropertyValue("--breakpoint-mobile").trim(),
};

const breakpointsMap = {
  mobile: "(max-width: 600px)",
};

function useMediaQuery(breakpoint: keyof typeof breakpointsMap) {
  const mediaQuery = breakpointsMap[breakpoint];
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, mediaQuery]);

  return matches;
}

export default useMediaQuery;
