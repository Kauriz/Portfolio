import { Ground, Wall, WallWithDoor, Plinthe } from "../Room";

export function SalleProfil() {
    return (
        <group>
            <Ground position={[25, 0, -25]} args={[10, 10]} />
            <Ground position={[25, 10, -25]} args={[10, 10]} />
            <Wall position={[25, 5, -30]} rotation={[0, 0, 0]} color={"blue"} args={[10, 10]} />
            <Wall position={[25, 5, -20]} rotation={[0, 0, 0]} color={"red"} args={[10, 10]} />
            <Wall position={[30, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 10]} />
            <Plinthe position={[29.97, 0.1, -25]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[20.03, 0.1, -21.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[20.03, 0.1, -28.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[25, 0.1, -20.03]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[25, 0.1, -29.97]} rotation={[0, 0, 0]} length={10} />
        </group>
    )
}