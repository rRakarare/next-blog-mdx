import { Box, Center, HStack, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
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
      <Box
        position={"fixed"}
        top={"100px"}
        left={"100px"}
        w={"100px"}
        h={"100px"}
      >
        <Center
          position={"fixed"}
          top={"100px"}
          left={"100px"}
          w={"100px"}
          h={"100px"}
        >
          <Text fontWeight={"semibold"} fontSize={"5xl"} marginBottom={"10px"}>
          {currentSlide}
          </Text>
        </Center>
        <svg
          width="100"
          height="100"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 4.5H93.5C98.7467 4.5 103 8.7533 103 14V93C103 98.2467 98.7467 102.5 93.5 102.5H14.5C9.2533 102.5 5 98.2467 5 93V14C5 8.7533 9.2533 4.5 14.5 4.5Z"
            stroke={colorMode === "dark" ? "#47474741" : "#d6d6d67c"}
            strokeWidth="9"
          />
          <motion.path
            d="M14.5 4.5H93.5C98.7467 4.5 103 8.7533 103 14V93C103 98.2467 98.7467 102.5 93.5 102.5H14.5C9.2533 102.5 5 98.2467 5 93V14C5 8.7533 9.2533 4.5 14.5 4.5Z"
            stroke={colorMode === "dark" ? "white" : "black"}
            strokeWidth="9"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </Box>
      <VStack marginTop={"20rem"} marginLeft={"20rem"} align={"flex-start"}>
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
