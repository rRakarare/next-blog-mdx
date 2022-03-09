

import { SimpleGrid, Container } from "@chakra-ui/react";
import HeroHome from "../components/HeroHome"


export default function Home() {
  return (
    <>
    <HeroHome/>
    <Container maxW='container.xl' >
      Home
    </Container>
    </>
  );
}


