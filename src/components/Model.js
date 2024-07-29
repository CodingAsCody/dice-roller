import React, { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Dice.glb')
  const mesh = useRef();
  const [rotate, setRotate] = useState(false);

  useFrame(({clock}) => {
    if (rotate) {
      const a = clock.getElapsedTime() * 15.0;
      mesh.current.rotation.x = a;
      mesh.current.rotation.z = a;
    }
  });

  const handleClick = () => {
    if (rotate) setRotate(false);
    else setRotate(true);
  }

  return (
    <group {...props} dispose={null}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.dice.geometry} 
        material={materials.White} 
        ref={mesh} 
        onClick={handleClick}
      />
    </group>
  )
}

useGLTF.preload('/Dice.glb')