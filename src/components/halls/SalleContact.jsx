import { Ground, Wall, WallWithDoor, Plinthe } from "../Room";

export function SalleContact() {
    return (
        <group>
            <Ground position={[-25, 0, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -30]} args={[10, 10]} />
            <Ground position={[-25, 0, -30]} args={[10, 10]} />
            <Wall position={[-25, 5, -14.75]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-25, 5, -35.25]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-30.25, 5, -25]} rotation={[0, -Math.PI / 2, 0]} args={[20, 10]} />
            <Plinthe position={[-25, 0.1, -15.03]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-25, 0.1, -34.97]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -20]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -30]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[-20.03, 0.1, -25]} rotation={[0, -Math.PI/2, 0]} length={6} />
            <Plinthe position={[-20.03, 0.1, -16.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[-20.03, 0.1, -33.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
        </group>
    )
}