import { Ground, Wall, WallWithDoor, Plinthe, Door, Sofa, Dresser, Lamp, OpenBook, WallLamp } from "../Room"; 
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from 'three'

export function CoatRack({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/coatRack.glb')
  const clone = useMemo(() => {
      const c = scene.clone()
      const box = new THREE.Box3().setFromObject(c)
      const center = box.getCenter(new THREE.Vector3())
      c.children.forEach(child => {
        child.position.sub(center)
      })
      c.traverse((child) => {
        if (child.isMesh) {
          child.raycast = () => {}
        }
      })
      return c
    }, [scene])

  return (
    <primitive object={clone} scale={scale} position={position} rotation={rotation} />
  )
}

export function Doormat({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/doormat.glb')
  const clone = useMemo(() => {
      const c = scene.clone()
      const box = new THREE.Box3().setFromObject(c)
      const center = box.getCenter(new THREE.Vector3())
      c.children.forEach(child => {
        child.position.sub(center)
      })
      c.traverse((child) => {
        if (child.isMesh) {
          child.raycast = () => {}
        }
      })
      return c
    }, [scene])

  return (
    <primitive object={clone} scale={scale} position={position} rotation={rotation} />
  )
}

export function Shoes1({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/shoes1.glb')
  const clone = useMemo(() => {
      const c = scene.clone()
      const box = new THREE.Box3().setFromObject(c)
      const center = box.getCenter(new THREE.Vector3())
      c.children.forEach(child => {
        child.position.sub(center)
      })
      c.traverse((child) => {
        if (child.isMesh) {
          child.raycast = () => {}
        }
      })
      return c
    }, [scene])

  return (
    <primitive object={clone} scale={scale} position={position} rotation={rotation} />
  )
}

export function Carpet({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/carpet.glb')
  const clone = useMemo(() => {
      const c = scene.clone()
      const box = new THREE.Box3().setFromObject(c)
      const center = box.getCenter(new THREE.Vector3())
      c.children.forEach(child => {
        child.position.sub(center)
      })
      c.traverse((child) => {
        if (child.isMesh) {
          child.raycast = () => {}
        }
      })
      return c
    }, [scene])

  return (
    <primitive object={clone} scale={scale} position={position} rotation={rotation} />
  )
}

export function SalleAccueil(){
    return(
    <group>
        <Ground position={[0, 0, 0]} args={[10,10]}/>
        <Ground position={[0, 10, 0]} args={[10,10]}/>
        <Ground position={[0, 0, 6.5]} args={[3,3]}/>
        <Wall position={[3.25, 5, 5.25]} rotation={[0, Math.PI, 0]} args={[3.5,10]} />
        <Wall position={[-3.25, 5, 5.25]} rotation={[0, Math.PI, 0]} args={[3.5,10]} />
        <Wall position={[0, 6.2, 5.25]} rotation={[0, Math.PI, 0]} args={[3,4]} />
        <Wall position={[-5.25, 5, 0]} rotation={[0, Math.PI / 2, 0]} args={[10,10]} />
        <Wall position={[5.25, 5, 0]} rotation={[0, -Math.PI / 2, 0]} args={[10,10]} />
        <WallWithDoor position={[5,5,-5]} rotation={[0, 0, 0]} />
        <Plinthe position={[-4.97, 0.1, 0]} rotation={[0, -Math.PI/2, 0]} length={10} />
        <Plinthe position={[4.97, 0.1, 0]} rotation={[0, -Math.PI/2, 0]} length={10} />
        <Plinthe position={[-3.25, 0.1, 4.97]} rotation={[0, 0, 0]} length={3.5} />
        <Plinthe position={[3.25, 0.1, 4.97]} rotation={[0, 0, 0]} length={3.5} />
        <Plinthe position={[-3.5, 0.1, -4.97]} rotation={[0, 0, 0]} length={3} />
        <Plinthe position={[3.5, 0.1, -4.97]} rotation={[0, 0, 0]} length={3} />
        <Door position={[0, 2, 5.25]} scale={[0.02,0.02,0.03]} rotation={[0,0,0]}/>
        <Sofa position={[3.8,0,1]} scale={[2.5, 2.5, 2.5]} rotation={[0,-Math.PI/2,0]} />
        <Dresser position={[4.2,0.1,-3.5]} scale={[2.5,2.5,2.5]} rotation={[0,-Math.PI/2,0]} />
        <CoatRack position={[-4,3,0]} scale={[3,3,3]} rotation={[0,Math.PI/2,0]} />
        <Doormat position={[0,0.01,4]} scale={[4,4,4]} rotation={[-Math.PI/2,Math.PI,0]} />
        <Shoes1 position={[-4,0.26,0]} scale={[0.13,0.13,0.13]} rotation={[0,-Math.PI/2,0]} />
        <Carpet position={[-3.7,0.1,0]} scale={[1,1,1]} rotation={[0,-Math.PI/2,0]} />
        <Lamp position={[4.3,2.3,-3.9]} scale={[0.02,0.02,0.02]} rotation={[0,-Math.PI/2,0]} />
        <OpenBook position={[4.2,1.89,-3.2]} scale={[0.02,0.02,0.02]} rotation={[0,0,0]} />
        <WallLamp position={[-3.5,3,-4.82]} scale={[1,1,1]} rotation={[0,0,0]} />
    </group>
    )
}