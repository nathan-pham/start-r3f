import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"
import { useState, useRef } from "react"

export default function RotatingCube({speed=1, color="#000", position=[0, 0, 0], size=[1, 1, 1]}) {
    const [expand, setExpand] = useState(false)
    const mesh = useRef(null)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    const spring = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    })

    const handleExpand = () => setExpand(!expand)
    
    return (
        <a.mesh ref={mesh} position={position} scale={spring.scale} onClick={handleExpand} castShadow>
            <boxBufferGeometry attach="geometry" args={size} />
            <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={0.5} />
        </a.mesh>
    )
}