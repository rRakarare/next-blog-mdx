import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import customTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="black"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
