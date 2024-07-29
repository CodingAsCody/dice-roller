import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, CameraControls } from '@react-three/drei';
import { Model } from './components/Model';
import { Background } from './components/Background';

export default function App() {
    return (
        <div style={{ width: "80vw", height: "50vh" }}>
            <Canvas shadows camera={{position:[-0.5,87.5,0.5],fov:120}}>
                <Model position={[0, 82, 1.5]}/>
                <Model position={[0, 82, -1.5]} />
                <Background />
                <Environment preset="city" background />
            </Canvas>
        </div>
    )
}