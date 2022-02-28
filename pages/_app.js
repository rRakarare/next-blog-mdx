import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import customTheme from "../styles/theme";
import {colors} from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <NextNprogress
          color={colors.primary["100"]}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />

        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
