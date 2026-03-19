import { Ground, Wall, WallWithDoor } from "../Room";

export function CouloirContact() {
    return (
        <group>
            <Ground position={[-15, 0, -30]} args={[10, 4]} />
            <Ground position={[-15, 4, -30]} args={[10, 4]} />
            <Ground position={[-15, 0, -20]} args={[10, 4]} />
            <Ground position={[-15, 4, -20]} args={[10, 4]} />
            <Wall position={[-15, 2, -22]} rotation={[0, 0, 0]} color={"blue"} args={[10, 4]} />
            <Wall position={[-15, 2, -18]} rotation={[0, 0, 0]} color={"red"} args={[10, 4]} />
            <WallWithDoor position={[-20, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <Wall position={[-15, 2, -32]} rotation={[0, 0, 0]} color={"blue"} args={[10, 4]} />
            <Wall position={[-15, 2, -28]} rotation={[0, 0, 0]} color={"red"} args={[10, 4]} />
            <WallWithDoor position={[-20, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
        </group>
    )
}