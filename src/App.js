import { useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, 'Dice.glb');
    return (
        <>
            <primitive object={gltf.scene} />
        </>
    )
}

export default function App() {
    return (
        <div>
            <Canvas>
                <Model />
                <OrbitControls />
                <Environment preset="forest" background />
            </Canvas>
        </div>
    )
}