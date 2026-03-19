import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Painting({ position, rotation, image, onNear, onLeave }) {
  const texture = useTexture(image)
  const meshRef = useRef()
  const { camera } = useThree()
  const [isNear, setIsNear] = useState(false)
  

  useFrame(() => {
    const playerPosition = new THREE.Vector3(
      camera.position.x,
      camera.position.y - 2,
      camera.position.z - 5
    )
    const distance = playerPosition.distanceTo(
      new THREE.Vector3(...position)
    )
    if (distance < 3) {
      setIsNear(true)
      onNear?.()
    } else {
      if (isNear) onLeave?.()
        setIsNear(false)
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}