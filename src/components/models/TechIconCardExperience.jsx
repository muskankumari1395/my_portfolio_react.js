import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// Component to render the 3D model
const TechModel = ({ modelPath, scale = 1, rotation = [0, 0, 0] }) => {
  const { scene } = useGLTF(modelPath);
  
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      rotation={rotation} 
    />
  );
};

// Main component that creates the Canvas and renders the model
const TechIconCardExperience = ({ model }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <TechModel 
          modelPath={model.modelPath} 
          scale={model.scale} 
          rotation={model.rotation} 
        />
      </Suspense>
    </Canvas>
  );
};

export default TechIconCardExperience;