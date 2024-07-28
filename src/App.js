import { useState, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const diceFaceRotations = [
    [0, 0, 0],           // Face 1
    [0, Math.PI / 2, 0], // Face 2
    [Math.PI / 2, 0, 0], // Face 3
    [-Math.PI / 2, 0, 0],// Face 4
    [0, -Math.PI / 2, 0],// Face 5
    [Math.PI, 0, 0]      // Face 6
];

const Model = () => {
    const diceRef = useRef();
    const gltf = useLoader(GLTFLoader, 'Dice.glb');

    const handleDiceClick = () => {
        if (diceRef.current) {
            // Randomly select a rotation that corresponds to a dice face
            const [x, y, z] = diceFaceRotations[Math.floor(Math.random() * diceFaceRotations.length)];
            diceRef.current.rotation.set(x, y, z);
        }
    }
    return (
        <>
            <primitive 
                object={gltf.scene} 
                ref={diceRef}
                position={[0,0,0]}
                onClick={handleDiceClick}
            />
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