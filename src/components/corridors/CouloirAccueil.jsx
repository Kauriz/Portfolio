import { Ground, Wall, WallWithDoor } from "../Room";

export function CouloirAccueil() {
    return (
        <group>
            <Ground position={[0, 0, -10]} args={[4, 10]} />
            <Ground position={[0, 4, -10]} args={[4, 10]} />
            <Wall position={[2, 2, -10]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 4]} />
            <Wall position={[-2, 2, -10]} rotation={[0, Math.PI / 2, 0]} color={"green"} args={[10, 4]} />
            <WallWithDoor position={[5, 5, -15]} rotation={[0, 0, 0]} color={"red"} />
        </group>
    )
}