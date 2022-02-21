import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="black"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
