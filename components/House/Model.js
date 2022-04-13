import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/house.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type04.geometry}
        material={materials.border}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type04_1.geometry}
        material={materials.door}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type04_2.geometry}
        material={materials.wndow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type04_3.geometry}
      >
        <meshStandardMaterial color={props.roofcolor} opacity={1} transparent/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_house_type04_4.geometry}
        material={materials.main}
      />
    </group>
  );
}

useGLTF.preload("/house.gltf");
