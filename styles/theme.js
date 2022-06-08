import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#1e1e2b")(props),
    },
  }),
};
export const colors = {
  primary: {
    100: "#F7D147",
  },
  dark: "#263238",
  dark2: "#1e1e2b"
};

const customTheme = extendTheme({ styles, colors });

export default customTheme;
