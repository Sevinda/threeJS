import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible={true} args={[1, 200, 300]} scale={2}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
