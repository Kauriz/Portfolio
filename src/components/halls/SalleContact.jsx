import { Ground, Wall, WallWithDoor, Plinthe, CatStatue, Pedestal, RopeBarrier, Linkedin, Mail, Piano, Bookshelf, SleepingCat, Table, Chair, Chess, WallLamp, Plant1, UnderShelf } from "../Room";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from 'three'
import { useRef } from "react";
import { useState, useEffect } from "react";

const BASE = import.meta.env.BASE_URL

export function Carpet({ position, scale, rotation }) {
    const { scene } = useGLTF(BASE + 'models/carpetContact.glb')
    const clone = useMemo(() => {
        const c = scene.clone()
        const box = new THREE.Box3().setFromObject(c)
        const center = box.getCenter(new THREE.Vector3())
        c.children.forEach(child => {
            child.position.sub(center)
        })
        c.traverse((child) => {
            if (child.isMesh) {
                child.raycast = () => { }
            }
        })
        return c
    }, [scene])

    return (
        <primitive object={clone} scale={scale} position={position} rotation={rotation} />
    )
}

export function SalleContact() {
    const target1 = useRef()
    const target2 = useRef()
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setReady(true)
    }, [])

    return (
        <group>
            <Ground position={[-25, 0, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -20]} args={[10, 10]} />
            <Ground position={[-25, 10, -30]} args={[10, 10]} />
            <Ground position={[-25, 0, -30]} args={[10, 10]} />
            <Wall position={[-25, 5, -14.75]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-25, 5, -35.25]} rotation={[0, 0, 0]} args={[10, 10]} />
            <Wall position={[-30.25, 5, -28.01]} rotation={[0, -Math.PI / 2, 0]} args={[13.98, 10]} />
            <Wall position={[-30.25, 5, -16.99]} rotation={[0, -Math.PI / 2, 0]} args={[3.99, 10]} />
            <Wall position={[-30.25, 0.92, -20]} rotation={[0, -Math.PI / 2, 0]} args={[2.04, 0.65]} />
            <Wall position={[-30.25, 5.6, -20]} rotation={[0, -Math.PI / 2, 0]} args={[2.04, 2]} />
            <Plinthe position={[-25, 0.1, -15.03]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-25, 0.1, -34.97]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -20]} rotation={[0, -Math.PI / 2, 0]} length={10} />
            <Plinthe position={[-29.97, 0.1, -30]} rotation={[0, -Math.PI / 2, 0]} length={10} />
            <Plinthe position={[-20.03, 0.1, -25]} rotation={[0, -Math.PI / 2, 0]} length={6} />
            <Plinthe position={[-20.03, 0.1, -16.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Plinthe position={[-20.03, 0.1, -33.5]} rotation={[0, -Math.PI / 2, 0]} length={3} />
            <Pedestal position={[-29, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <Linkedin position={[-29, 2.5, -16.1]} scale={[1, 1, 3]} rotation={[0, Math.PI, 0]} />
            <Pedestal position={[-25, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <Mail position={[-25, 2.5, -16.1]} scale={[0.2, 0.2, 0.2]} rotation={[0, Math.PI, 0]} />
            <Pedestal position={[-21, 0.01, -16]} scale={[0.13, 0.161, 0.13]} />
            <CatStatue position={[-21, 1.85, -16.1]} scale={[3, 3, 3]} rotation={[0, Math.PI, 0]} />
            <RopeBarrier position={[-22.3, 0.71, -17]} scale={[0.011, 0.01, 0.011]} rotation={[0, 0, 0]} />
            <RopeBarrier position={[-24.8, 0.71, -17]} scale={[0.011, 0.01, 0.011]} rotation={[0, 0, 0]} />
            <RopeBarrier position={[-27.3, 0.71, -17]} scale={[0.011, 0.01, 0.011]} rotation={[0, 0, 0]} />
            <Piano position={[-25, 1.6, -33.9]} scale={[6, 6, 6]} rotation={[0, 0, 0]} />
            <Bookshelf position={[-29.5, 2.09, -31]} scale={[1, 1, 1]} rotation={[0, Math.PI / 2.05, 0]} />
            <Bookshelf position={[-29.5, 2.09, -27.5]} scale={[1, 1, 1]} rotation={[0, Math.PI / 2.05, 0]} />
            <Bookshelf position={[-29.5, 2.09, -24]} scale={[1, 1, 1]} rotation={[0, Math.PI / 2.05, 0]} />
            <Table position={[-21, 0.9, -25]} scale={[0.8, 2.4, 1.6]} rotation={[0, 0, 0]} />
            <Chair position={[-21, 1.2, -26.2]} scale={[0.3, 0.3, 0.3]} rotation={[0, 0, 0]} />
            <Chair position={[-21, 1.2, -23.8]} scale={[0.3, 0.3, 0.3]} rotation={[0, Math.PI, 0]} />
            <Chess position={[-21, 2, -25]} scale={[0.02, 0.02, 0.02]} rotation={[0, 0, 0]} />
            <Carpet position={[-25, 0.05, -27]} scale={[3, 3, 3]} rotation={[0, Math.PI / 2, 0]} />
            <WallLamp position={[-22, 3, -34.72]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
            <WallLamp position={[-20.22, 3, -25]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1]} />
            <object3D ref={target1} position={[-29, 1, -16]} />
            <object3D ref={target2} position={[-25, 1, -16]} />
            {ready && (
                <>
                    <spotLight
                        position={[-29, 7, -17]}
                        target={target1.current}
                        color="#ffddaa"
                        intensity={80}
                        angle={Math.PI / 8}
                        penumbra={0.2}
                        distance={8}
                    />
                    <spotLight
                        position={[-25, 7, -17]}
                        target={target2.current}
                        color="#ffddaa"
                        intensity={80}
                        angle={Math.PI / 8}
                        penumbra={0.2}
                        distance={8}
                    />
                </>
            )}
            <Plant1 position={[-23.8,4.1,-34.5]} scale={[1,1,1]} />
            <UnderShelf position={[-30.6,3.5,-20]} scale={[0.003,0.003,0.003]} rotation={[0,Math.PI/2, 0]} />
        </group>
    )
}