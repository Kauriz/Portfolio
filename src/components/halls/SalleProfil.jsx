import { Canvas } from "@react-three/fiber";
import { Ground, Wall, WallWithDoor, Plinthe, Easel, Canva, Lamp, Dresser } from "../Room";
import { useTexture } from "@react-three/drei"

export function ImagePlane({position, rotation, scale, path}) {
  const texture = useTexture(path)

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} transparent/>
    </mesh>
  )
}


export function SalleProfil() {
    return (
        <group>
            <Ground position={[25, 0, -25]} args={[10, 10]} />
            <Ground position={[25, 10, -25]} args={[10, 10]} />
            <Wall position={[25, 5, -30.25]} rotation={[0, 0, 0]} color={"blue"} args={[10, 10]} />
            <Wall position={[25, 5, -19.75]} rotation={[0, 0, 0]} color={"red"} args={[10, 10]} />
            <Wall position={[30.25, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10, 10]} />
            <Plinthe position={[29.97, 0.1, -25]} rotation={[0, -Math.PI/2, 0]} length={10} />
            <Plinthe position={[20.03, 0.1, -21.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[20.03, 0.1, -28.5]} rotation={[0, -Math.PI/2, 0]} length={3} />
            <Plinthe position={[25, 0.1, -20.03]} rotation={[0, 0, 0]} length={10} />
            <Plinthe position={[25, 0.1, -29.97]} rotation={[0, 0, 0]} length={10} />
            <Easel position={[28.7,1.8,-29]} scale={[1.8,1.8,1.8]}  rotation={[0,Math.PI/4 + Math.PI,0]}/>
            <Canva position={[27,3,-20.01]} scale={[0.015,0.015,0.015]} rotation={[0,-Math.PI/2,0]} />
            <Canva position={[24,2,-20.01]} scale={[0.01,0.01,0.01]} rotation={[0,-Math.PI/2,0]} />
            <Canva position={[22,3.5,-20.01]} scale={[0.013,0.013,0.013]} rotation={[0,-Math.PI/2,0]} />
            <Canva position={[22,2,-29.99]} scale={[0.013,0.013,0.013]} rotation={[0,Math.PI/2,0]} />
            <Canva position={[25,3.5,-29.99]} scale={[0.013,0.013,0.013]} rotation={[0,Math.PI/2,0]} />
            <Canva position={[29.99,3.2,-26]} scale={[0.016,0.016,0.008]} rotation={[0,0,0]} />
            <Canva position={[29.99,1.5,-24]} scale={[0.01,0.01,0.01]} rotation={[0,0,0]} />
            <Canva position={[29.99,3.5,-22.5]} scale={[0.01,0.01,0.01]} rotation={[0,0,0]} />
            <Dresser position={[29.3,0.1,-21]} scale={[2.5,2.5,2.5]} rotation={[0,-Math.PI/2,0]} />
            <Lamp position={[29.5,2.3,-20.5]} scale={[0.02,0.02,0.02]} rotation={[0,-Math.PI/2,0]} />
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/mountain.png"} position={[28.3,2.3,-28.64]} scale={[1,1,1]} rotation={[-Math.PI/11,-Math.PI/4.3,-Math.PI/15]} />
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/hoodie.png"} position={[25.03,3.5,-29.96]} scale={[0.6,0.6,0.6]} rotation={[0,0,0]} />
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/chess.png"} position={[22.03,2,-29.96]} scale={[0.6,0.6,0.6]} rotation={[0,0,0]} />
            <ImagePlane path={"${import.meta.env.BASE_URL}textures/music.png"} position={[24,2,-20.04]} scale={[0.65,0.5,0.5]} rotation={[0,Math.PI,0]} />
        </group>
    )
}