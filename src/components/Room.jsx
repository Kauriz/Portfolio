import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'

useTexture.preload([
  '/textures/wall/wall_diff_1k.png',
  '/textures/wall/wall_nor_gl_1k.png',
  '/textures/wall/wall_rough_1k.png',
  '/textures/floor/floor_02_diff_1k.png',
  '/textures/floor/floor_02_nor_gl_1k.png',
  '/textures/floor/floor_02_rough_1k.png',
])


export function Ground({ position, args }) {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/floor/floor_02_diff_1k.png',
    '/textures/floor/floor_02_nor_gl_1k.png',
    '/textures/floor/floor_02_rough_1k.png'
  ])
  const [width, height] = args
  const plankSize = 2 // taille d'une planche en unités
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping

  colorMap.repeat.set(width / plankSize, height / plankSize)
  normalMap.repeat.set(width / plankSize, height / plankSize)
  roughnessMap.repeat.set(width / plankSize, height / plankSize)
  colorMap.needsUpdate = true
  normalMap.needsUpdate = true
  roughnessMap.needsUpdate = true
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} >
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        side={2}

      />
      <planeGeometry args={args} />
    </mesh>
  )
}

export function Wall({ position, rotation, color, args }) {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/wall/wall_diff_1k.png',
    '/textures/wall/wall_nor_gl_1k.png',
    '/textures/wall/wall_rough_1k.png'
  ])
  const [width, height] = args
  const plankSize = 2 // taille d'une planche en unités
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping

  colorMap.repeat.set(width / plankSize, height / plankSize)
  normalMap.repeat.set(width / plankSize, height / plankSize)
  roughnessMap.repeat.set(width / plankSize, height / plankSize)
  colorMap.needsUpdate = true
  normalMap.needsUpdate = true
  roughnessMap.needsUpdate = true
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={args} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        side={2}

      />
    </mesh>
  )
}

export function WallWithDoor({ position, rotation, color }) {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/wall/wall_diff_1k.png',
    '/textures/wall/wall_nor_gl_1k.png',
    '/textures/wall/wall_rough_1k.png'
  ])
  const plankSize = 2
  const sideColor = useMemo(() => {
    const clone = colorMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(3 / plankSize, 10 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [colorMap])
  const sideNormal = useMemo(() => {
    const clone = normalMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(3 / plankSize, 10 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [normalMap])
  const sideRoughness = useMemo(() => {
    const clone = roughnessMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(3 / plankSize, 10 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [roughnessMap])

  const topColor = useMemo(() => {
    const clone = colorMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(10 / plankSize, 6 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [colorMap])
  const topNormal = useMemo(() => {
    const clone = normalMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(10 / plankSize, 6 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [normalMap])
  const topRoughness = useMemo(() => {
    const clone = roughnessMap.clone()
    clone.wrapS = clone.wrapT = THREE.RepeatWrapping
    clone.repeat.set(10 / plankSize, 6 / plankSize)
    clone.needsUpdate = true
    return clone
  }, [roughnessMap])

  return (
    <group position={position} rotation={rotation}>
      {/* Côté gauche */}
      <mesh position={[-8.5, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial
          map={sideColor}
          normalMap={sideNormal}
          roughnessMap={sideRoughness}
          side={2}

        />
      </mesh>
      {/* Côté droit */}
      <mesh position={[-1.5, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial
          map={sideColor}
          normalMap={sideNormal}
          roughnessMap={sideRoughness}
          side={2}

        />
      </mesh>
      {/* Dessus */}
      <mesh position={[-5, 2, 0]}>
        <planeGeometry args={[4, 6]} />
        <meshStandardMaterial
          map={topColor}
          normalMap={topNormal}
          roughnessMap={topRoughness}
          side={2}

        />
      </mesh>
    </group>
  )
}