import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// Original font settings
const fonts = {
  heading:
    "Cal Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  body: "Inter, -apple-system,BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
};

// Twitch style fonts
// const fonts = {
//   heading: "sans-serif",
//   body: "sans-serif",
// };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    clicked: {
      main: "#9146FF",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
