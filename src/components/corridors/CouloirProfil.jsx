import { Ground, Wall, WallWithDoor, Plinthe } from "../Room";

export function CouloirProfil() {
    return (
        <group>
            <Ground position={[15, 0, -25]} args={[10, 4]} />
            <Ground position={[15, 4, -25]} args={[10, 4]} />
            <Wall position={[15, 2, -22.75]} rotation={[0, 0, 0]} color={"red"} args={[9.98, 4]} />
            <Wall position={[15, 2, -27.25]} rotation={[0, 0, 0]} color={"blue"} args={[9.98, 4]} />
            <WallWithDoor position={[20, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <Plinthe position={[15, 0.1, -23.03]} rotation={[0, 0, 0]} length={10.1} />
            <Plinthe position={[15, 0.1, -26.97]} rotation={[0, 0, 0]} length={10.1} />
        </group>
    )
}