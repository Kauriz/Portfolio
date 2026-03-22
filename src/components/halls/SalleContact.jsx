import { Ground, Wall, WallWithDoor, Plinthe, CatStatue, Pedestal, RopeBarrier, Linkedin, Mail, Piano, Bookshelf, SleepingCat, Table, Chair, Chess } from "../Room";

export function SalleContact() {
    return (
        <group>
            <Ground position={[-25, 0, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -30]} args={[10, 10]} />
            <Ground position={[-25, 0, -30]} args={[10, 10]} />
            <Wall position={[-25, 5, -14.75]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-25, 5, -35.25]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-30.25, 5, -25]} rotation={[0, -Math.PI / 2, 0]} args={[20, 10]} />
            <Plinthe position={[-25, 0.1, -15.03]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-25, 0.1, -34.97]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -20]} rotation={[0, -Math.PI / 2, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -30]} rotation={[0, -Math.PI / 2, 0]} length={10} />
            <Plinthe position={[-20.03, 0.1, -25]} rotation={[0, -Math.PI / 2, 0]} length={6} />
            <Plinthe position={[-20.03, 0.1, -16.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Plinthe position={[-20.03, 0.1, -33.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Pedestal position={[-29, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <Linkedin position={[-29, 2.5, -16.1]} scale={[1, 1, 3]} rotation={[0, Math.PI, 0]}/>
            <Pedestal position={[-25, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <Mail position={[-25, 2.5, -16.1]} scale={[0.2, 0.2, 0.2]} rotation={[0, Math.PI, 0]}/>
            <Pedestal position={[-21, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <CatStatue position={[-21, 1.85, -16.1]} scale={[3, 3, 3]} rotation={[0, Math.PI, 0]}/>
            <RopeBarrier position={[-22.3, 0.71, -17]} scale={[0.011,0.01,0.011]} rotation={[0,0,0]} />
            <RopeBarrier position={[-24.8, 0.71, -17]} scale={[0.011,0.01,0.011]} rotation={[0,0,0]} />
            <RopeBarrier position={[-27.3, 0.71, -17]} scale={[0.011,0.01,0.011]} rotation={[0,0,0]} />
            <Piano position={[-25, 1.6, -33.9]} scale={[6,6,6]} rotation={[0,0,0]} />
            <Bookshelf position={[-29.5, 2.09, -31]} scale={[1,1,1]} rotation={[0,Math.PI/2.05,0]} />
            <Bookshelf position={[-29.5, 2.09, -27.5]} scale={[1,1,1]} rotation={[0,Math.PI/2.05,0]} />
            <Bookshelf position={[-29.5, 2.09, -24]} scale={[1,1,1]} rotation={[0,Math.PI/2.05,0]} />
            <SleepingCat position={[-29, 1, -34]} scale={[3,3,3]} rotation={[0,Math.PI/2.05,0]} />
            <Table position={[-21, 0.9, -25]} scale={[1,2.4,2]} rotation={[0,0,0]} />
            <Chair position={[-21, 1.2, -26.2]} scale={[0.3,0.3,0.3]} rotation={[0,0,0]} />
            <Chair position={[-21, 1.2, -23.8]} scale={[0.3,0.3,0.3]} rotation={[0,Math.PI,0]} />
            <Chess position={[-21, 2.1, -24.9]} scale={[0.03,0.03,0.03]} rotation={[0,0,0]} />
        </group>
    )
}