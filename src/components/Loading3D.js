
import {  Html, useProgress } from "@react-three/drei";

const Loading3D = () => {
  const { progress } = useProgress();

  return (
    <Html center as="div" >
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loading3D;
