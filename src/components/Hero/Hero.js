import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loading3D from "../Loading3D";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export const Hero3dImage = () => {
  const computer = useGLTF("/3dImages/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} intensity={1}/>
      <primitive object={computer.scene} position={[-3,-1,0]} rotation={[0, 0.5, 0]}/>
    </mesh>
  );
};

const Hero = () => {
  return (
    <div
      style={{
        height: "35vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 20 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={<Loading3D />}></Suspense>
        <OrbitControls maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Hero3dImage />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Hero;
