import { extendTheme } from "@chakra-ui/react";

export const colors = {
  primary: {
    100: "#F7D147",
  },
  dark: "#263238"
};


const customTheme = extendTheme({ colors });

export default customTheme;