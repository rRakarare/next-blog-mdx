import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import {
  Environment,
  OrbitControls,
  SpotLight,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Model from "./Model";

export default function Scene(props) {
  const [focus, setFocus] = useState(null);

  const ref = useRef();
  return (
    <Box position={"relative"} w={"100%"} h={900}>
      <Box position={"absolute"} zIndex={10}>
        <HStack>
          <Button onClick={() => setFocus(null)}>Normal</Button>
          <Button onClick={() => setFocus('dach_außen_fl')}>Dach</Button>
          <Button onClick={() => setFocus('wand_außen_fl')}>Wand</Button>
          <Button onClick={() => setFocus('og_fl')}>OG</Button>
        </HStack>
      </Box>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [10, 7, 10] }}
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
  );
}
