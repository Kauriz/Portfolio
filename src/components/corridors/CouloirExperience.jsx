import { Ground, Wall, WallWithDoor, Plinthe } from "../Room";

export function CouloirExperience() {
    return (
        <group>
            <Ground position={[0, 0, -40]} args={[4, 10]} />
            <Ground position={[0, 4, -40]} args={[4, 10]} />
            <Wall position={[2.25, 2, -40]} rotation={[0, -Math.PI / 2, 0]} args={[9.98, 4]} />
            <Wall position={[-2.25, 2, -40]} rotation={[0, -Math.PI / 2, 0]} args={[9.98, 4]} />
            <WallWithDoor position={[20, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"red"} />
            <Plinthe position={[-1.97, 0.1, -40]} rotation={[0, -Math.PI/2, 0]} length={10.1} />
            <Plinthe position={[1.97, 0.1, -40]} rotation={[0, -Math.PI/2, 0]} length={10.1} />
        </group>
    )
}