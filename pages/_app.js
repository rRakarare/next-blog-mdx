import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import Footer from "../components/Footer";
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
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
