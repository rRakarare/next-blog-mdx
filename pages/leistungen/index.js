import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Counter from "../../components/Leistungen/counter";
import FrontText from "../../components/Leistungen/frontText";
import SingleLeistung from "../../components/Leistungen/single";

const Leistungen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0) {
        setFading(true);
      } else {
        setFading(false);
      }
      // console.log(latest);
    });
  }, []);
  useEffect(() => {
    console.log(fading);
  }, [fading]);

  const changeSlide = (val) => {
    setCurrentSlide(val);
  };

  return (
    <>
      <SimpleGrid columns={2} h={"100vh"}>
        <Center justifyContent={"center"} alignItems={"center"}><FrontText /></Center>
        <Center justifyContent={"center"} alignItems={"center"}><Text>Scroll Down</Text></Center>
        
        
      </SimpleGrid>
      <Counter currentSlide={currentSlide} />

      <VStack justifyContent={"center"}>
        <SingleLeistung
          FOR={"Lappens"}
          HEAD="Elo Gainer"
          DESC={
            "Vape shoreditch four loko live-edge, vinyl kogi shaman intelligentsia hashtag hoodie succulents sustainable marfa vegan"
          }
          TEXT={
            "I'm baby deep v mixtape tote bag, listicle salvia quinoa vice +1 freegan. Shaman leggings vape tousled lyft meditation, brooklyn 3 wolf moon."
          }
          Number={1}
          IMG="test"
          IMG_IN="in"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          fading={fading}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={2}
          IMG="test2"
          IMG_IN="in2"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          fading={fading}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={3}
          IMG="test3"
          IMG_IN="in3"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          fading={fading}
        />
        <SingleLeistung
          FOR={"asd"}
          HEAD="Head"
          DESC={"lorem ipsum"}
          TEXT={"dsaadsdasadsdsa"}
          Number={4}
          IMG="test4"
          IMG_IN="in4"
          currentSlide={currentSlide}
          changeSlide={changeSlide}
          fading={fading}
        />
      </VStack>
    </>
  );
};

export default Leistungen;
