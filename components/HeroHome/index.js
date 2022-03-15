import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { Loader } from "@react-three/drei"
import Model from "./Model";
import { Box } from "@chakra-ui/react";

function ZoomIn() {
  const vec = new THREE.Vector3(0, -2, 65)
  return useFrame(({ camera }) => camera.position.lerp(vec, 0.1))
}

function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}

export default function HeroHome() {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      style={{
        zIndex: -1,
        background: "linear-gradient(90deg, #ffffff 20%, #a5a3a3)",
        marginTop: "-65px",
      }}
    >
      <Canvas camera={{ position: [0, -2, 1000], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight
          color="#ffffff"
          groundColor="#b9b9b9"
          position={[-7, 25, 13]}
          intensity={0.85}
        />
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            <Rig>
              <ZoomIn/>
              <Model url="/compressed.glb" />
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
        </Suspense>
      </Canvas>
      <Loader/>
      
    </Box>
  );
}
