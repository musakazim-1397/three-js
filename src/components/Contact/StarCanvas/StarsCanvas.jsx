import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { random } from 'maath'
import React, { Suspense, useRef, useState } from 'react'
import Loading3D from '../../Loading3D'

const StarsCanvas = () => {
    const [sphere]= useState(()=>random.inSphere(new Float32Array(5000), {radius:200}))
    const ref = useRef();
    useFrame((state,delta)=>{
        ref.current.rotation.y-=delta/15;
        ref.current.rotation.x-=delta/10;
    })
  return (
    <group rotation={[0,0,Math.PI/4]}>
        <Points positions={sphere} ref={ref} stride={3} frustumCulled>
            <PointMaterial color="white" sizeAttenuation={true} size={0.002} depthWrites={false}/>
        </Points>
    </group>
  )
}

const StarsCanvasComponent = () => {
    return (
        <div >
        <Canvas camera={[0,0,1]} style={{position:'absolute', inset:0, width:'100%',height:'100%'}}>
            <Suspense fallback={<Loading3D/>}>
                <StarsCanvas/>
            </Suspense>
            <Preload all/>
        </Canvas>
        </div>
    )
}

export default StarsCanvasComponent