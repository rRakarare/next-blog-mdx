import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
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
    fadeout: {opacity: 0,},
    fadein: {opacity: 1,}
  };

  const inVariant = {
    visible: {translateY: "0px", opacity: 1, transition: {translateY: { duration: .7, delay: .1 }, opacity: { duration: .7, delay: .3 }} },
    hidden: { translateY: "100vh",opacity: 0, transition: {translateY: { duration: .7, delay: 0 }, opacity: { duration: .4, delay: 0 }} },
    fadeout: {opacity: 0, display:"none"},
    fadein: {opacity: 1, display:"block"}
  };

  const mobBoxVariant = {
    visibleMob: {opacity: 1},
    hiddenMob: {opacity: 0}
  }

  const control = useAnimation();

  const [isLargerMD] = useMediaQuery('(min-width: 768px)')

  const [ref, inView] = useInView({ threshold: 1 });
  const [mobref, mobInView] = useInView();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    if (inView && Number > currentSlide) {
      changeSlide(Number);
    } else if (Number === currentSlide) {
      changeSlide(Number-1)
    }
  }, [inView]);

  // useEffect(() => {
  //   if (inView) {
  //     control.start('visibleMob')
  //   } else {
  //     control.start('hiddenMob')
  //   }
  // }, [mobInView]);


  useEffect(() => {
    if (fading) {
      control.start("fadeout");
      setDisplay(false)

    } else  {
      setDisplay(true)
      control.start("fadein");
    }
  }, [fading]);


  useEffect(() => {
    console.log(currentSlide)
    if (inView) {
      control.start("visible");
    } else if (currentSlide === Number -1) {
      control.start("hidden");
    }
  }, [currentSlide]);

  return (
    <>
      <SimpleGrid zIndex={"base"} columns={{base:1,md:2}} w={"100%"} marginBottom={{base:'5rem!important', md:"50vh!important"}}>
        <Box w={"100%"} paddingX={{base: "1.4rem", sm:"3rem", md:"4rem", lg:"5rem", xl:"8rem", '2xl':"14rem"}}>
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
              
              background={"red"}
              height={"1px"}
              w={"200px"}
              ref={ref}
            ></Box>
          </VStack>
        </Box>
        {isLargerMD ? 
        <Center display={display ? "block": "none"} position={{base:"relative", md:"static"}} justifyContent={"center"} alignItems={"center"}>
          <Box
            as={motion.div}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            position={{base:"static", md:"fixed"}}
            right={0}
            top={0}
            height={{base:"100%", md:"100vh"}}
            width={{base:"100%", md:"50vw"}}
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
            position={{base:"absolute", md:"fixed"}}
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
        :
        <Center marginTop={"5rem"} ref={mobref} position={'relative'} justifyContent={"center"} alignItems={"center"}>
          <Box
            as={motion.div}
            variants={mobBoxVariant}
            initial="hidden"
            animate={control}
            position={'static'}
            right={0}
            top={0}
            height={'600px'}
            width={'100%'}
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
            variants={mobBoxVariant}
            initial="hidden"
            animate={control}
            top={"calc(50% - 150px)"}
            right={"calc(50% - 150px)"}
            position={'absolute'}
            background={"red"}
            w={"300px"}
            h={"300px"}
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
        }
      </SimpleGrid>
    </>
  );
};

export default SingleLeistung;
