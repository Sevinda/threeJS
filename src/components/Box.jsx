import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/map.jpg";

const Box = () => {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 90]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <meshStandardMaterial map={colorMap} /> */}
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default Box;
