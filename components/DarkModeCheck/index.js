import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DarkModeCheck = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (router.pathname === "/leistungen" && colorMode === "light") {
      toggleColorMode();
    } else if (router.pathname != "/leistungen" && colorMode === "dark") {
      toggleColorMode();
    }
  }, [router]);

  return <></>;
};

export default DarkModeCheck;
