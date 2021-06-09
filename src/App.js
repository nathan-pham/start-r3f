import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Cube = ({ speed=0.01 }) => {
    const mesh = useRef(null)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += speed
    })
    
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" />
        </mesh>
    )
}

export default function App() {
    return (
        <Canvas>
            <Cube />
        </Canvas>
    )
}