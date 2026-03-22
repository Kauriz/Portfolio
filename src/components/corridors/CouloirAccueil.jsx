import { Ground, Wall, WallWithDoor, Plinthe, WallLamp } from "../Room";

export function CouloirAccueil() {
    return (
        <group>
            <Ground position={[0, 0, -10]} args={[4, 10]} />
            <Ground position={[0, 4, -10]} args={[4, 10]} />
            <Wall position={[2.25, 2, -10]} rotation={[0, -Math.PI / 2, 0]} args={[9.98, 4]} />
            <Wall position={[-2.25, 2, -10]} rotation={[0, Math.PI / 2, 0]} args={[9.98, 4]} />
            <WallWithDoor position={[5, 5, -15]} rotation={[0, 0, 0]} />
            <Plinthe position={[1.97, 0.1, -10]} rotation={[0, -Math.PI/2, 0]} length={10.1} />
            <Plinthe position={[-1.97, 0.1, -10]} rotation={[0, -Math.PI/2, 0]} length={10.1} />
            <WallLamp position={[-1.78, 3, -10]} rotation={[0, Math.PI/2, 0]} scale={[1,1,1]} />
        </group>
    )
}