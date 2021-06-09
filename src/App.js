import { softShadows } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import RotatingCube from "./components/three/RotatingCube"
import Lights from "./components/three/Lights"
import Plane from "./components/three/Plane"

softShadows()

export default function App() {
    return (
        <Canvas shadows softShadows camera={{position: [-5, 2, 10], fov: 60}}>
            <Lights />
            <Plane />
            <RotatingCube position={[ 0, 1,  0]} size={[3, 2, 1]} color="lightblue" />
            <RotatingCube position={[-2, 1, -5]} color="pink" />
            <RotatingCube position={[ 5, 1, -2]} color="pink" />
        </Canvas>
    )
}