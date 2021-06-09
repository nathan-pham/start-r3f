import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function RotatingCube({ speed=0.01, color="#000" }) {
    const mesh = useRef(null)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += speed
    })
    
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    )
}