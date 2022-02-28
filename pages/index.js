

import { SimpleGrid, Container } from "@chakra-ui/react";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Hero/>
    <Container maxW='container.xl' >
      Home
    </Container>
    </>
  );
}


