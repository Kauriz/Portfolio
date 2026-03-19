import { Ground, Wall, WallWithDoor } from "../Room";
import { Painting } from "../Painting";

export function SalleProjet({ onNear, onLeave }) {
    return (
        <group>
            <Ground position={[0, 0, -25]} args={[20, 20]} />
            <Ground position={[0, 10, -25]} args={[20, 20]} />
            <Wall position={[-7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5, 10]} />
            <Wall position={[7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5, 10]} />
            <WallWithDoor position={[-10, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[-10, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} />
            <Wall position={[7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <Wall position={[-7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <WallWithDoor position={[10, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} />
            <Wall position={[10, 5, -17.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
            <Wall position={[10, 5, -32.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />
            <Painting
                    position={[0, 3, -15]}
                    rotation={[0, 0, 0]}
                    image="/textures/logoChat.jpeg"
                    onNear={() => onNear('projet1')}
                    onLeave={onLeave}
                  />
        </group>
    )
}