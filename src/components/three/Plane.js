export default function Plane() {
    return (
        <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
            </mesh>
        </group>
    )
}