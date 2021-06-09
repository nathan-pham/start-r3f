import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function RotatingCube({speed=0.01, color="#000", position=[0, 0, 0], size=[1, 1, 1]}) {
    const mesh = useRef(null)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += speed
    })
    
    return (
        <mesh ref={mesh} position={position} castShadow>
            <boxBufferGeometry attach="geometry" args={size} />
            <meshStandardMaterial attach="material" color={color} />
        </mesh>
    )
}