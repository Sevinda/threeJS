import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";

const App = () => {
  return (
    <div>
      <h1>Scp</h1>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[-2, 5, 2]} intensity={10} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>
        </Canvas>
      </div>

      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[-2, 5, 2]} intensity={10} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
