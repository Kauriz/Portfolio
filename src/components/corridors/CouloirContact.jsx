import { Ground, Wall, WallWithDoor, Plinthe, Pedestal, CatStatue } from "../Room";

export function CouloirContact() {
    return (
        <group>
            <Ground position={[-15, 0, -30]} args={[10, 4]} />
            <Ground position={[-15, 4, -30]} args={[10, 4]} />
            <Ground position={[-15, 0, -20]} args={[10, 4]} />
            <Ground position={[-15, 4, -20]} args={[10, 4]} />
            <Wall position={[-15, 2, -22.25]} rotation={[0, 0, 0]} args={[9.98, 4]} />
            <Wall position={[-15, 2, -17.75]} rotation={[0, 0, 0]} args={[9.98, 4]} />
            <WallWithDoor position={[-20, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <Wall position={[-15, 2, -32.25]} rotation={[0, 0, 0]} args={[9.98, 4]} />
            <Wall position={[-15, 2, -27.75]} rotation={[0, 0, 0]} args={[9.98, 4]} />
            <WallWithDoor position={[-20, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <Plinthe position={[-15, 0.1, -18.03]} rotation={[0, 0, 0]} length={10.1} />
            <Plinthe position={[-15, 0.1, -21.97]} rotation={[0, 0, 0]} length={10.1} />
            <Plinthe position={[-15, 0.1, -28.03]} rotation={[0, 0, 0]} length={10.1} />
            <Plinthe position={[-15, 0.1, -31.97]} rotation={[0, 0, 0]} length={10.1} />
        </group>
    )
}