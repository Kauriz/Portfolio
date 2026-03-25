import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'
import { MeshBasicMaterial } from 'three'

const PAINTING_SIZE = [3, 2]

export function Painting({ position, rotation, image, onNear, onLeave, scale, playerPositionRef }) {
  const texture = useTexture(image)
  const meshRef = useRef()
  const { camera } = useThree()
  const [isNear, setIsNear] = useState(false)

  // Frame
  const { scene } = useGLTF('/models/frame/frame.gltf')
  const frameClone = useMemo(() => scene.clone(), [scene])

  // Vecteurs hors du useFrame pour éviter les fuites mémoire
  const playerPos = useMemo(() => new THREE.Vector3(), [])
  const paintingPos = useMemo(() => new THREE.Vector3(...position), position)

  useFrame(() => {
    const distance = playerPositionRef.current.distanceTo(paintingPos)

    if (distance < 4) {
      setIsNear(true)
      onNear?.()
    } else {
      if (isNear) onLeave?.()
      setIsNear(false)
    }
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Fond blanc */}
      <mesh ref={meshRef} scale={[scale[0]*0.18,scale[1]*0.21,scale[2]*0.14]} position={[0, 0, -0.001]}>
        <planeGeometry args={PAINTING_SIZE} />
        <meshBasicMaterial color="white" />
      </mesh>
      {/* Tableau */}
      <mesh ref={meshRef} scale={[scale[0]*0.14,scale[0]*0.14,scale[0]*0.14]}>
        <planeGeometry args={PAINTING_SIZE} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.1} />
      </mesh>
      {/* Cadre */}
      <primitive object={frameClone} scale={scale} position={[0, 0, -0.05]} />
    </group>
  )
}

useGLTF.preload('/models/frame/frame.gltf')