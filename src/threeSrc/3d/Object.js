import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import '../shaders/CustomShader.js';

const Object = () => {
    const ref = useRef();
    useFrame(({clock}) => {
        ref.current.material.uTime = clock.getElapsedTime();
    }); 
    return (
        <mesh
            ref={ref}
        >
            <planeBufferGeometry attach='geometry' args={[1,1,32,32]}/>
            <customShaderMaterial uColor='wheat' ref={ref}/>
        </mesh>
    )
}

export default Object