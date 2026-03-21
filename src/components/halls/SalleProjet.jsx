import { Ground, Wall, WallWithDoor, PaintingFrame, Plinthe, Sofa } from "../Room";
import { Painting } from "../Painting";
import { useGLTF } from "@react-three/drei";
import { useMemo } from 'react'
import { useTexture } from "@react-three/drei";
import * as THREE from 'three'


useGLTF.preload('/models/pillar.glb')




export function Pedestal({ position, scale }) {
    const { scene } = useGLTF('/models/pedestal.glb')
    const [colorMap, normalMap, roughnessMap] = useTexture([
        '/textures/baseboard/baseboard_diff_1k.png',
        '/textures/baseboard/baseboard_nor_gl_1k.png',
        '/textures/baseboard/baseboard_rough_1k.png',
    ])
    const clone = useMemo(() => {
        const c = scene.clone()
        c.traverse((child) => {
            if (child.isMesh) {
                child.raycast = () => { }
                child.material = new THREE.MeshStandardMaterial({
                    map: colorMap,
                    normalMap: normalMap,
                    roughnessMap: roughnessMap,
                    color: "#fdf1d5"
                })
            }
        })
        return c
    }, [scene, colorMap, normalMap, roughnessMap])

    return (
        <group position={position}>
            <primitive object={clone} scale={scale} rotation={[0, 0, 0]} />
            <mesh visible={false}>
                <cylinderGeometry args={[1, 0.5, 4, 5]} />
                <meshStandardMaterial />
            </mesh>
        </group>
    )
}

export function CatStatue({ position, rotation, scale }) {
    const { scene } = useGLTF('/models/concrete_cat_statue_1k.gltf/concrete_cat_statue_1k.gltf')
    const clone = useMemo(() => scene.clone(), [scene])
    return (
        <primitive
            object={clone}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}

export function SalleProjet({ onNear, onLeave, playerPositionRef }) {
    return (
        <group>
            <Ground position={[0, 0, -25]} args={[20, 20]} />
            <Ground position={[0, 10, -25]} args={[20, 20]} />
            <Wall position={[-7.5, 5, -14.75]} rotation={[0, 0, 0]} args={[5, 10]} />
            <Plinthe position={[-9.97, 0.1, -33.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Plinthe position={[-9.97, 0.1, -25]} rotation={[0, -Math.PI / 2, 0]} length={6} />
            <Plinthe position={[-9.97, 0.1, -16.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Wall position={[7.5, 5, -14.75]} rotation={[0, 0, 0]} color={"red"} args={[5, 10]} />
            <Plinthe position={[-6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -31]} rotation={[0, -Math.PI / 2, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -19]} rotation={[0, -Math.PI / 2, 0]} length={8} />
            <Plinthe position={[6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[-6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <WallWithDoor position={[-10, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[-10, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} />
            <Wall position={[7.5, 5, -35.25]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <Wall position={[-7.5, 5, -35.25]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <WallWithDoor position={[10, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} />
            <Wall position={[10.25, 5, -17.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
            <Wall position={[10.25, 5, -32.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
            <Painting
                position={[-5.5, 3, -34.9]}
                rotation={[0, 0, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet1')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[5.5, 3, -34.9]}
                rotation={[0, 0, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet2')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[9.9, 3, -30.5]}
                rotation={[0, -Math.PI / 2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet3')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[9.9, 3, -19.5]}
                rotation={[0, -Math.PI / 2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet4')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[-9.9, 3, -25]}
                rotation={[0, Math.PI / 2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet5')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Pedestal position={[-5, 0.01, -30]} scale={[0.13, 0.161, 0.13]} />
            <CatStatue position={[-4.99, 1.84, -29.9]} scale={[3, 3, 3]} />
            <Sofa position={[-8.5, 0, -25]} scale={[2.5, 2.5, 2.5]} rotation={[0, Math.PI / 2, 0]} />
        </group>
    )
}