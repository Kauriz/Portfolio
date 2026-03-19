import { Ground, Wall, WallWithDoor } from "../Room";

export function CouloirProfil() {
    return (
        <group>
            <Ground position={[15, 0, -25]} args={[10, 4]} />
            <Ground position={[15, 4, -25]} args={[10, 4]} />
            <Wall position={[15, 2, -23]} rotation={[0, 0, 0]} color={"red"} args={[10, 4]} />
            <Wall position={[15, 2, -27]} rotation={[0, 0, 0]} color={"blue"} args={[10, 4]} />
            <WallWithDoor position={[20, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
        </group>
    )
}