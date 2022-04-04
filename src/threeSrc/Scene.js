import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Object from './3d/Object.js';

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], near: 0.01, far: 10000, fov: 60 }}>
        <Suspense fallback={null}>
            <Object/>
        </Suspense>
        <OrbitControls/>
    </Canvas>
  )
}

export default Scene