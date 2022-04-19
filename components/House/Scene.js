import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Model from "./Model";
import { FaHome } from "react-icons/fa";
import { GiBrickWall, GiStairs } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";

export default function Scene(props) {
  const [focus, setFocus] = useState(null);

  const ref = useRef();
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box
        justifyContent={"center"}
        display={"flex"}
        position={"relative"}
        w={"100%"}
        h={700}
      >
        <Box position={"absolute"} top={10} zIndex={10}>
          <HStack>
            <Button onClick={() => setFocus(null)}>
              <Icon as={FaHome} />
            </Button>
            <Button onClick={() => setFocus("dach_außen_fl")}>
              <Icon as={MdRoofing} />
            </Button>
            <Button onClick={() => setFocus("wand_außen_fl")}>
              <Icon as={GiBrickWall} />
            </Button>
            <Button onClick={() => setFocus("og_fl")}>
              <Icon as={GiStairs} />
            </Button>
          </HStack>
        </Box>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 6, 10] }}
          style={{ positon: "absolute" }}
        >
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <ambientLight />
            <Environment preset="sunset" />
            <Model focus={focus} />
          </Suspense>
          <OrbitControls ref={ref} />
        </Canvas>
      </Box>
      <Box>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          p={10}
        >
          <Box h="40px">
            <Heading>I'm a Heading</Heading>
          </Box>
          <Text color="gray.500">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            in the graphic, print, and publishing industries for previewing
            layouts and visual mockups.
          </Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );
}
