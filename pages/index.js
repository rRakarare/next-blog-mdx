

import { SimpleGrid, Container } from "@chakra-ui/react";
import styled from "styled-components";
import HeroHome from "../components/HeroHome"
import Scene from "../components/House/Scene";
import MOneProcess from "../components/MOneProcess";


export default function Home() {

  const Asdqwe = styled.div`
    background: red;
  `

  return (
    <>
    <HeroHome/>
    <MOneProcess/>
    <Scene/>
    </>
  );
}


