import { Box } from "@chakra-ui/react";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

export default function Scene(props) {
  return (
    <Box w={500} h={500}>
      <Canvas>
        <OrbitControls autoRotate makeDefault />
        <ambientLight/>
        <Suspense fallback={null}>
          <Model roofcolor={"red"} />
        </Suspense>
      </Canvas>
    </Box>
  );
}
