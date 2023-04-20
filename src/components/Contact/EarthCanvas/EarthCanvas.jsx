import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Loading3D from '../../Loading3D'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

export const Earth3dImage = () => {
    const earth = useGLTF('/3dImages/planet/scene.gltf');
    return (
        <mesh setRotationFromAxisAngle={90}>
            <primitive object={earth.scene} scale={2.5} />
        </mesh>)
}

const EarthCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} >
        <Suspense fallback={<Loading3D/>}></Suspense>
        <OrbitControls autoRotate rotateSpeed={150} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false}/>
        <Preload all/>
        <Earth3dImage/>
    </Canvas>
  )
}

export default EarthCanvas