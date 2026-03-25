import { Ground, Wall, WallWithDoor, Plinthe, Desk, Chair, Plant1, Lamp, OpenBook, Sofa, ChalkBoard } from "../Room";
import { projects } from "../../data/projects";
import { Painting } from "../Painting";

export function SalleExperience({onLeave, playerPositionRef, onNear}) {
    return (
        <group>
            <Ground position={[0, 0, -50]} args={[10, 10]} />
            <Ground position={[0, 10, -50]} args={[10, 10]} />
            <WallWithDoor position={[5, 5, -45]} rotation={[0, 0, 0]} color={"red"} />
            <Wall position={[5.25, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"green"} args={[10, 10]} />
            <Wall position={[-5.25, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 10]} />
            <Wall position={[0, 5, -55.25]} rotation={[0, 0, 0]} color={"blue"} args={[10, 10]} />
            <Plinthe position={[0, 0.1, -54.97]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-4.97, 0.1, -50]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[4.97, 0.1, -50]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[3.5, 0.1, -45.03]} rotation={[0, 0, 0]} length={3} />
            <Plinthe position={[-3.5, 0.1, -45.03]} rotation={[0, 0, 0]} length={3} />
            <Desk position={[1.5, 0.8, -53.7]} scale={[2,2,2]} />
            <Chair position={[1.5,0.8,-52.5]} scale={[0.3,0.3,0.3]} rotation={[0,Math.PI,0]}/>
            <Plant1 position={[3,2.5,-54]} scale={[1,1,1]} />
            <Lamp position={[0,2.1,-54]} scale={[0.02,0.02,0.02]} />
            <OpenBook position={[1.5,1.65,-53.5]} scale={[0.02,0.02,0.02]} rotation={[0,Math.PI/2,0]}/>
            <Painting
                            position={projects.projet6.position}
                            rotation={[0, Math.PI / 2, 0]}
                            image={projects.projet6.image}
                            onNear={() => onNear('projet6')}
                            onLeave={onLeave}
                            scale={[2.5, 2.5, 2.5]}
                            playerPositionRef={playerPositionRef}
                        />
            <Painting
                            position={projects.projet7.position}
                            rotation={[0, -Math.PI / 2, 0]}
                            image={projects.projet7.image}
                            onNear={() => onNear('projet7')}
                            onLeave={onLeave}
                            scale={[2.5, 2.5, 2.5]}
                            playerPositionRef={playerPositionRef}
                        />
            <Sofa position={[4,0.01,-47.5]} scale={[2.5,2.5,2.5]} rotation={[0, -Math.PI/2, 0]} />
            <ChalkBoard position={[-3,1.7,-53.1]} scale={[0.32,0.32,0.32]} rotation={[0, -Math.PI/3,0]} />

        </group>
    )
}