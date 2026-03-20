import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

useTexture.preload([
  '/textures/wall/wall_diff_1k.png',
  '/textures/wall/wall_nor_gl_1k.png',
  '/textures/wall/wall_rough_1k.png',
  '/textures/floor/floor_02_diff_1k.png',
  '/textures/floor/floor_02_nor_gl_1k.png',
  '/textures/floor/floor_02_rough_1k.png',
])


useGLTF.preload('/models/frame/frame.gltf')

// ─────────────────────────────────────────────
// Hook utilitaire : clone + configure une texture
// Chaque appel retourne une instance indépendante
// → plus de mutation partagée entre les murs
// ─────────────────────────────────────────────
function useClonedTextures(paths, repeatX, repeatY) {
  const textures = useTexture(paths)

  return useMemo(() => {
    return textures.map(t => {
      const clone = t.clone()
      clone.wrapS = clone.wrapT = THREE.RepeatWrapping
      clone.repeat.set(repeatX, repeatY)
      clone.needsUpdate = true
      return clone
    })
  }, [repeatX, repeatY])
}


export function Ground({ position, args }) {
  const [width, height] = args
  const plankSize = 2

  const [colorMap, normalMap, roughnessMap] = useClonedTextures(
    [
      '/textures/floor/floor_02_diff_1k.png',
      '/textures/floor/floor_02_nor_gl_1k.png',
      '/textures/floor/floor_02_rough_1k.png',
    ],
    width / plankSize,
    height / plankSize
  )

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} receiveShadow>
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

export function Wall({ position, rotation, args }) {
  const [width, height] = args
  const plankSize = 2

  const [colorMap, normalMap, roughnessMap] = useClonedTextures(
    [
      '/textures/wall/wall_diff_1k.png',
      '/textures/wall/wall_nor_gl_1k.png',
      '/textures/wall/wall_rough_1k.png',
    ],
    width / plankSize,
    height / plankSize
  )

  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <planeGeometry args={args} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}


export function WallWithDoor({ position, rotation }) {
  const plankSize = 2

  // Panneau latéral : 3 × 10
  const [sideColor, sideNormal, sideRoughness] = useClonedTextures(
    [
      '/textures/wall/wall_diff_1k.png',
      '/textures/wall/wall_nor_gl_1k.png',
      '/textures/wall/wall_rough_1k.png',
    ],
    3 / plankSize,
    10 / plankSize
  )

  // Panneau du dessus : 4 × 6
  const [topColor, topNormal, topRoughness] = useClonedTextures(
    [
      '/textures/wall/wall_diff_1k.png',
      '/textures/wall/wall_nor_gl_1k.png',
      '/textures/wall/wall_rough_1k.png',
    ],
    4 / plankSize,
    6 / plankSize
  )

  const sideMat = (
    <meshStandardMaterial
      map={sideColor}
      normalMap={sideNormal}
      roughnessMap={sideRoughness}
      side={THREE.DoubleSide}
    />
  )

  const topMat = (
    <meshStandardMaterial
      map={topColor}
      normalMap={topNormal}
      roughnessMap={topRoughness}
      side={THREE.DoubleSide}
    />
  )

  return (
    <group position={position} rotation={rotation}>
      {/* Panneau gauche */}
      <mesh position={[-8.5, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau droit */}
      <mesh position={[-1.5, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau du dessus */}
      <mesh position={[-5, 2, 0]} receiveShadow castShadow>
        <planeGeometry args={[4, 6]} />
        {topMat}
      </mesh>
    </group>
  )
}

export function PaintingFrame({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/frame/frame.gltf')
  const clone = useMemo(() => scene.clone(), [scene])

  return <primitive object={clone} position={position} rotation={rotation} scale={scale} />
}

export function Plinthe({ position, rotation, length }) {
  const [colorMap, normalMap, roughnessMap] = useClonedTextures(
    [
      '/textures/baseboard/baseboard_diff_1k.png',
      '/textures/baseboard/baseboard_nor_gl_1k.png',
      '/textures/baseboard/baseboard_rough_1k.png',
    ],
    0.5,
    3,
  )
  colorMap.rotation = Math.PI / 2
  colorMap.center.set(0.5, 0.5)
  normalMap.rotation = Math.PI / 2
  normalMap.center.set(0.5, 0.5)
  roughnessMap.rotation = Math.PI / 2
  roughnessMap.center.set(0.5, 0.5)
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={[length, 1, 0.05]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        color={"#80684e"}
      />
    </mesh>
  )
}

