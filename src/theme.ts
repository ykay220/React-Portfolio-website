import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "64em", // Modify this value to change the base breakpoint

    lg: "65em",
  },
});

export default theme;
