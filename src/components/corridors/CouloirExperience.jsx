import { Ground, Wall, WallWithDoor } from "../Room";

export function CouloirExperience() {
    return (
        <group>
            <Ground position={[0, 0, -40]} args={[4, 10]} />
            <Ground position={[0, 4, -40]} args={[4, 10]} />
            <Wall position={[2, 2, -40]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 4]} />
            <Wall position={[-2, 2, -40]} rotation={[0, -Math.PI / 2, 0]} color={"green"} args={[10, 4]} />
            <WallWithDoor position={[20, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"red"} />
        </group>
    )
}