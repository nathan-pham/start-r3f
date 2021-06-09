import { softShadows, OrbitControls } from "@react-three/drei"
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
            <RotatingCube position={[ 0, 1,  0]} speed={2} size={[3, 2, 1]} color="lightblue" />
            <RotatingCube position={[-2, 1, -5]} speed={6} color="pink" />
            <RotatingCube position={[ 5, 1, -2]} speed={6} color="pink" />

            <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
    )
}