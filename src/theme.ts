import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "375px", // Modify this value to change the base breakpoint

    lg: "1095px",
  },
});

export default theme;
