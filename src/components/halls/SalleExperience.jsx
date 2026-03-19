import { Ground, Wall, WallWithDoor } from "../Room";

export function SalleExperience() {
    return (
        <group>
            <Ground position={[0, 0, -50]} args={[10, 10]} />
            <Ground position={[0, 10, -50]} args={[10, 10]} />
            <WallWithDoor position={[5, 5, -45]} rotation={[0, 0, 0]} color={"red"} />
            <Wall position={[5, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"green"} args={[10, 10]} />
            <Wall position={[-5, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 10]} />
            <Wall position={[0, 5, -55]} rotation={[0, 0, 0]} color={"blue"} args={[10, 10]} />
        </group>
    )
}