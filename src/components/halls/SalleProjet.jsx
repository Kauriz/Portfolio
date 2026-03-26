import { Ground, Wall, WallWithDoor, PaintingFrame, Plinthe, Sofa, WallLamp, PaintingLamp, PawPrint, UnderShelf } from "../Room";
import { Painting } from "../Painting";
import { useGLTF } from "@react-three/drei";
import { projects } from "../../data/projects";
import { ImagePlane } from "../halls/SalleProfil" 

useGLTF.preload(`${import.meta.env.BASE_URL}models/pillar.glb`)

export function SalleProjet({ onNear, onLeave, playerPositionRef }) {
    const bluePawprint = "#5591a5"
    const redPawprint = "#b66745"
    const greenPawprint = "#7c9a7e"
    return (
        <group>
            <Ground position={[0, 0, -25]} args={[20, 20]} />
            <Ground position={[0, 10, -25]} args={[20, 20]} />
            <Wall position={[-5.74, 5, -14.75]} rotation={[0, 0, 0]} args={[1.48, 10]} />
            <Wall position={[-9.26, 5, -14.75]} rotation={[0, 0, 0]} args={[1.48, 10]} />
            <Wall position={[-7.5, 0.92, -14.75]} rotation={[0, 0, 0]} args={[2.04, 0.65]} />
            <Wall position={[-7.5, 5.6, -14.75]} rotation={[0, 0, 0]} args={[2.04, 2]} />
            <Plinthe position={[-9.97, 0.1, -33.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Plinthe position={[-9.97, 0.1, -25]} rotation={[0, -Math.PI / 2, 0]} length={6} />
            <Plinthe position={[-9.97, 0.1, -16.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Wall position={[5.74, 5, -14.75]} rotation={[0, 0, 0]} args={[1.48, 10]} />
            <Wall position={[9.26, 5, -14.75]} rotation={[0, 0, 0]} args={[1.48, 10]} />
            <Wall position={[7.5, 0.92, -14.75]} rotation={[0, 0, 0]} args={[2.04, 0.65]} />
            <Wall position={[7.5, 5.6, -14.75]} rotation={[0, 0, 0]} args={[2.04, 2]} />
            <Plinthe position={[-6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[6, 0.1, -34.97]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -31]} rotation={[0, -Math.PI / 2, 0]} length={8} />
            <Plinthe position={[9.97, 0.1, -19]} rotation={[0, -Math.PI / 2, 0]} length={8} />
            <Plinthe position={[6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <Plinthe position={[-6, 0.1, -15.03]} rotation={[0, 0, 0]} length={8} />
            <WallWithDoor position={[-10, 5, -15]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[-10, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"green"} />
            <WallWithDoor position={[5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} />
            <Wall position={[7.5, 5, -35.25]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <Wall position={[-7.5, 5, -35.25]} rotation={[0, 0, 0]} color={"blue"} args={[5, 10]} />
            <WallWithDoor position={[10, 5, -20]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} />
            <Wall position={[10.25, 5, -17.5]} rotation={[0, -Math.PI / 2, 0]} args={[5, 10]} />
            <Wall position={[10.25, 5, -32.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5, 10]} />

            <Painting
                position={projects.projet1.position}
                rotation={[0, 0, 0]}
                image={projects.projet1.image}
                onNear={() => onNear('projet1')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />

            <Painting
                position={projects.projet2.position}
                rotation={[0, 0, 0]}
                image={projects.projet2.image}
                onNear={() => onNear('projet2')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />

            <Painting
                position={projects.projet3.position}
                rotation={[0, -Math.PI / 2, 0]}
                image={projects.projet3.image}
                onNear={() => onNear('projet3')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />

            <Painting
                position={projects.projet4.position}
                rotation={[0, -Math.PI / 2, 0]}
                image={projects.projet4.image}
                onNear={() => onNear('projet4')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />
            <Painting
                position={projects.projet5.position}
                rotation={[0, Math.PI / 2, 0]}
                image={projects.projet5.image}
                onNear={() => onNear('projet5')}
                onLeave={onLeave}
                scale={[7, 7, 7]}
                playerPositionRef={playerPositionRef}
            />

            <WallLamp position={[-5, 3, -15.18]} rotation={[0, Math.PI, 0]} scale={[1,1,1]} />
            <WallLamp position={[5, 3, -15.18]} rotation={[0, Math.PI, 0]} scale={[1,1,1]} />
            <PawPrint position={[-3,0.01,-17]} rotation={[0,Math.PI/4,0]} scale={[0.4,0.4,0.4]} color={bluePawprint} />
            <PawPrint position={[-4,0.01,-19]} rotation={[0,Math.PI/3.5,0]} scale={[0.4,0.4,0.4]} color={bluePawprint} />
            <PawPrint position={[-6,0.01,-18.5]} rotation={[0,Math.PI/3,0]} scale={[0.4,0.4,0.4]} color={bluePawprint} />
            <PawPrint position={[-7.5,0.01,-20.5]} rotation={[0,Math.PI/2.25,0]} scale={[0.4,0.4,0.4]} color={bluePawprint} />
            <PawPrint position={[-1,0.01,-17.5]} rotation={[0,Math.PI/3,0]} scale={[0.4,0.4,0.4]} color={bluePawprint} />
            <PawPrint position={[3,0.01,-17]} rotation={[0,-Math.PI/6,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[2.5,0.01,-18.8]} rotation={[0,-Math.PI/6.5,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[4.5,0.01,-19.4]} rotation={[0,-Math.PI/5,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[4,0.01,-21.5]} rotation={[0,-Math.PI/5.5,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[6.3,0.01,-21.5]} rotation={[0,-Math.PI/4,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[6.2,0.01,-24.2]} rotation={[0,-Math.PI/4,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[8.5,0.01,-23.4]} rotation={[0,-Math.PI/3,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[9.5,0.01,-26]} rotation={[0,-Math.PI/2.5,0]} scale={[0.4,0.4,0.4]} color={redPawprint} />
            <PawPrint position={[4,0.01,-24.2]} rotation={[0,Math.PI/4.5,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[4.2,0.01,-26.8]} rotation={[0,Math.PI/4.5,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[1.8,0.01,-26.8]} rotation={[0,Math.PI/5,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[2.5,0.01,-29.2]} rotation={[0,Math.PI/5.5,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[0.3,0.01,-29.5]} rotation={[0,Math.PI/6.5,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[1.3,0.01,-31.8]} rotation={[0,Math.PI/16,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[-0.6,0.01,-32.8]} rotation={[0,Math.PI/20,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <PawPrint position={[0.8,0.01,-34.8]} rotation={[0,Math.PI/30,0]} scale={[0.4,0.4,0.4]} color={greenPawprint} />
            <UnderShelf position={[-7.5,3.5,-14.4]} scale={[0.003,0.003,0.003]} rotation={[0,Math.PI, 0]} />
            <UnderShelf position={[7.5,2.34,-14.4]} scale={[0.003,0.003,0.003]} rotation={[0,Math.PI, 0]} />
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/contactSign.png"} position={[-12,2.5,-18.01]} scale={[1,1,1]} rotation={[0,-Math.PI,0]} /> 
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/experienceSign.png"} position={[-1.99,2.5,-37]} scale={[1,1,1]} rotation={[0,Math.PI/2,0]} /> 
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/projetSign.png"} position={[-1.99,2.5,-13.5]} scale={[1,1,1]} rotation={[0,Math.PI/2,0]} /> 
        </group>
    )
}