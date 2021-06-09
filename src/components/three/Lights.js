export default function Lights() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <directionalLight 
                shadow-mapSize-height={1024} 
                shadow-mapSize-width={1024} 
                shadow-camera-far={50}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                position={[0, 10, 0]} 
                intensity={1.5}
                castShadow
            />
        </>
    )
}