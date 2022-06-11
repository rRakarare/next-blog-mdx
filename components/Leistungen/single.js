import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Boxer = ({ children }) => {
  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const [ref, inView] = useInView({ threshold: 1 });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Box
      as={motion.div}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      transitionDuration={1}
    >
      {children}
    </Box>
  );
};

const SingleLeistung = ({
  FOR,
  HEAD,
  DESC,
  TEXT,
  Number,
  IMG,
  IMG_IN,
  currentSlide,
  changeSlide,
  fading
}) => {
  const boxVariant = {
    visible: { translateY: "0px", transition: { duration: .65 } },
    hidden: { translateY: "100vh", transition: { duration: .65, delay: .1 } },
  };

  const inVariant = {
    visible: {translateY: "0px", opacity: 1, transition: {translateY: { duration: .7, delay: .1 }, opacity: { duration: .7, delay: .3 }} },
    hidden: { translateY: "100vh",opacity: 0, transition: {translateY: { duration: .7, delay: 0 }, opacity: { duration: .4, delay: 0 }} },
  };

  const control = useAnimation();

  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && Number > currentSlide) {
      changeSlide(Number);
    } else if (Number === currentSlide) {
      changeSlide(Number-1)
    }
  }, [inView]);


  useEffect(() => {
    console.log(currentSlide)
    if (inView && fading) {
      control.start("visible");
    } else if (currentSlide === Number -1 || !fading) {
      control.start("hidden");
    }
  }, [currentSlide, fading]);

  return (
    <>
      <SimpleGrid columns={2} w={"100%"}>
        <Box w={"500px"}>
          <VStack align={"flex-start"}>
            <Boxer>
              <Text fontWeight={"medium"} fontSize={"large"}>
                Für | {FOR}
              </Text>
            </Boxer>
            <Boxer>
              <Heading
                marginBottom={"1rem"}
                color={"red"}
                fontWeight={"bold"}
                fontSize={"7xl"}
              >
                {HEAD}
              </Heading>
            </Boxer>
            <Boxer>
              <Text
                marginBottom={"1.4rem"}
                fontWeight={"medium"}
                fontSize={"2xl"}
              >
                Für | {DESC}
              </Text>
            </Boxer>
            <Boxer>
              <Text fontWeight={"medium"} fontSize={"md"}>
                Für | {TEXT}
              </Text>
            </Boxer>
            <Box
              marginTop={"20px!important"}
              marginBottom={"60vh!important"}
              background={"red"}
              height={"1px"}
              w={"200px"}
              ref={ref}
            ></Box>
          </VStack>
        </Box>
        <Center justifyContent={"center"} alignItems={"center"}>
          <Box
            as={motion.div}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            position={"fixed"}
            right={0}
            top={0}
            height={"100vh"}
            width={"50vw"}
          >
            <Image
              src={`/${IMG}.jpg`}
              alt="Dan Abramov"
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
          <Box
            as={motion.div}
            variants={inVariant}
            initial="hidden"
            animate={control}
            top={"calc(50vh - 200px)"}
            right={"calc(25vw - 200px)"}
            position={"fixed"}
            background={"red"}
            w={"400px"}
            h={"400px"}
          >
            <Image
              src={`/${IMG_IN}.jpg`}
              alt="Dan Abramov"
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
          </Box>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default SingleLeistung;
