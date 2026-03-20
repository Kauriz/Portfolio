import { Ground, Wall, WallWithDoor, Plinthe } from "../Room"; 

export function SalleAccueil(){
    return(
    <group>
        <Ground position={[0, 0, 0]} args={[10,10]}/>
        <Ground position={[0, 10, 0]} args={[10,10]}/>
        <Wall position={[0, 5, 5]} rotation={[0, Math.PI, 0]} color={"blue"} args={[10,10]}/>
        <Wall position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]} color={"green"} args={[10,10]}/>
        <Wall position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,10]}/>
        <WallWithDoor position={[5,5,-5]} rotation={[0, 0, 0]} color={"red"}/>
        <Plinthe position={[-4.97, 0.1, 0]} rotation={[0, -Math.PI/2, 0]} length={10} />
        <Plinthe position={[4.97, 0.1, 0]} rotation={[0, -Math.PI/2, 0]} length={10} />
        <Plinthe position={[0, 0.1, 4.97]} rotation={[0, 0, 0]} length={10} />
        <Plinthe position={[-3.5, 0.1, -4.97]} rotation={[0, 0, 0]} length={3} />
        <Plinthe position={[3.5, 0.1, -4.97]} rotation={[0, 0, 0]} length={3} />
    </group>
    )
}