import { Ground, Wall, WallWithDoor, PaintingFrame, Plinthe } from "../Room";
import { Painting } from "../Painting";
import { useGLTF } from "@react-three/drei";

useGLTF.preload('/models/sofa/sofa.gltf')

export function SalleProjet({ onNear, onLeave, playerPositionRef }) {
    const { scene } = useGLTF('/models/sofa/sofa.gltf')
    return (
        <group>
            <Ground position={[0, 0, -25]} args={[20, 20]} />
            <Ground position={[0, 10, -25]} args={[20, 20]} />
            <Wall position={[-7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5, 10]} />
            <Plinthe position={[-9.97, 0.1, -33.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[-9.97, 0.1, -25]} rotation={[0, -Math.PI/2, 0]} length={6} />
            <Plinthe position={[-9.97, 0.1, -16.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Wall position={[7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5, 10]} />
            <Plinthe position={[-6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -31]} rotation={[0, -Math.PI/2, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -19]} rotation={[0, -Math.PI/2, 0]} length={8} />
            <Plinthe position={[6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[-6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <WallWithDoor position={[-10, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[-10, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} />
            <Wall position={[7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <Wall position={[-7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <WallWithDoor position={[10, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} />
            <Wall position={[10, 5, -17.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
            <Wall position={[10, 5, -32.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
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
                rotation={[0, -Math.PI/2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet3')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[9.9, 3, -19.5]}
                rotation={[0, -Math.PI/2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet4')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={[-9.9, 3, -25]}
                rotation={[0, Math.PI/2, 0]}
                image="/textures/logoChat.jpeg"
                onNear={() => onNear('projet5')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <primitive object={scene} position={[-9, 0,-25]} scale={[2, 2, 2]} rotation={[0, Math.PI/2,0]}/>
        </group>
    )
}