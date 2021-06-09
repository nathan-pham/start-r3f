import { Canvas } from "@react-three/fiber"

import RotatingCube from "./components/three/RotatingCube"
import Lights from "./components/three/Lights"

export default function App() {
    return (
        <Canvas camera={{position: [-5, 2, 10], fov: 60}}>
            <Lights />
            <RotatingCube position={[ 0, 1,  0]} size={[3, 2, 1]} color="lightblue" />
            <RotatingCube position={[-2, 1, -5]} color="pink" />
            <RotatingCube position={[ 5, 1, -2]} color="pink" />
        </Canvas>
    )
}