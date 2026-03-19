import { Ground, Wall, WallWithDoor } from "../Room";

export function SalleContact() {
    return (
        <group>
            <Ground position={[-25, 0, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -30]} args={[10, 10]} />
            <Ground position={[-25, 0, -30]} args={[10, 10]} />
            <Wall position={[-25, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[10, 10]} />
            <Wall position={[-25, 5, -35]} rotation={[0, 0, 0]} color={"red"} args={[10, 10]} />
            <Wall position={[-30, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[20, 10]} />
        </group>
    )
}