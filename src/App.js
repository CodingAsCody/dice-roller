import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, CameraControls } from '@react-three/drei';
import { Model } from './components/Model';

export default function App() {
    return (
        <div style={{ width: "80vw", height: "50vh" }}>
            <Canvas shadows camera={{position:[2.25,3,0.25],fov:120}}>
                <Model position={[0, 0.5, 1.5]}/>
                <Model position={[0, 0.5, -1.5]} />
                <CameraControls />
                <Environment preset="city" background />
            </Canvas>
        </div>
    )
}