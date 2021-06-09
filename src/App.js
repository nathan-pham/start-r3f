import { Canvas } from "@react-three/fiber"

import RotatingCube from "./components/RotatingCube"
import Lights from "./components/Lights"

export default function App() {
    return (
        <Canvas camera={{position: [-5, 2, 10], fov: 60}}>
            <Lights />
            <RotatingCube color="red" />
        </Canvas>
    )
}