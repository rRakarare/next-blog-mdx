import { Box, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
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
    >
      {children}
    </Box>
  );
};

const SingleLeistung = ({ FOR, HEAD, DESC, TEXT, Number, IMG }) => {

  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const control = useAnimation();

  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

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
            <Heading marginBottom={"1rem"} color={"red"} fontWeight={"bold"} fontSize={"7xl"}>
              {HEAD}
            </Heading>
          </Boxer>
          <Boxer>
            <Text marginBottom={"1.4rem"} fontWeight={"medium"} fontSize={"2xl"}>
              Für | {DESC}
            </Text>
          </Boxer>
          <Boxer>
            <Text fontWeight={"medium"} fontSize={"md"}>
              Für | {TEXT}
            </Text>
          </Boxer>
          <Box marginTop={"20px!important"} marginBottom={"60vh!important"} background={"red"} height={"1px"} w={"200px"} ref={ref}></Box>
        </VStack>
      </Box>
      <Box      as={motion.div}
      variants={boxVariant}
      initial="hidden"
      animate={control} >
        {inView ? <Image src={`/${IMG}.jpg`} alt='Dan Abramov' objectFit={"cover"} position={"fixed"} right={0} top={0} height={"100vh"} width={"50vw"}/>: null}
      </Box>
      </SimpleGrid>
    </>
  );
};

export default SingleLeistung;
