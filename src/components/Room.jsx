import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

useTexture.preload([
  '/textures/wall/wall_diff_1k.png',
  '/textures/wall/wall_nor_gl_1k.png',
  '/textures/wall/wall_rough_1k.png',
  '/textures/floor/floor_02_diff_1k.png',
  '/textures/floor/floor_02_nor_gl_1k.png',
  '/textures/floor/floor_02_rough_1k.png',
])


useGLTF.preload('/models/frame/frame.gltf')
useGLTF.preload('/models/sofa/sofa.gltf')

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
    <mesh rotation={[-Math.PI / 2, 0, 0]} onUpdate={(mesh) => mesh.layers.enable(1)} position={position} receiveShadow >
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
  const thickness = 0.5


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
    <mesh position={position} rotation={rotation} onUpdate={(mesh) => mesh.layers.enable(1)} receiveShadow castShadow>
      <boxGeometry args={[width, height, thickness]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        side={THREE.DoubleSide}
        color={"#ffffff"}
        emissive={"#eeeeee"}
        emissiveIntensity={0.1}
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
      color={"#ffffff"}
      emissive={"#eeeeee"}
      emissiveIntensity={0.1}
    />
  )

  const topMat = (
    <meshStandardMaterial
      map={topColor}
      normalMap={topNormal}
      roughnessMap={topRoughness}
      side={THREE.DoubleSide}
      color={"#ffffff"}
      emissive={"#eeeeee"}
      emissiveIntensity={0.1}
    />
  )

  return (
    <group position={position} rotation={rotation}>
      {/* Panneau gauche */}
      <mesh position={[-8.5, 0, 0]} receiveShadow castShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau droit */}
      <mesh position={[-1.5, 0, 0]} receiveShadow castShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau du dessus */}
      <mesh position={[-5, 2, 0]} receiveShadow castShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
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
    <mesh position={position} rotation={rotation} onUpdate={(mesh) => mesh.layers.enable(1)} castShadow>
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

export function Door({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/door.glb')
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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />

      {/* Collider invisible */}
      <mesh visible={false} onUpdate={(mesh) => mesh.layers.enable(1)}>
        <boxGeometry args={[3, 6.5, 1]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Sofa({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/sofa/sofa.gltf')
  const clone = useMemo(() => {
    const c = scene.clone()
    c.traverse((child) => {
      if (child.isMesh) {
        child.raycast = () => { }
      }
    })
    return c
  }, [scene])

  return (
    <group position={position} rotation={rotation}>
      {/* Modèle visible — ignoré par le raycaster */}
      <primitive object={clone} scale={scale} />

      {/* Collider invisible */}
      <mesh visible={false} onUpdate={(mesh) => mesh.layers.enable(1)}>
        <boxGeometry args={[3.5, 2.5, 1.35]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Dresser({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/dresser.glb')
  const clone = useMemo(() => {
    const c = scene.clone()
    c.traverse((child) => {
      if (child.isMesh) {
        child.raycast = () => { }
      }
    })
    return c
  }, [scene])

  return (
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />

      {/* Collider invisible */}
      <mesh visible={false} >
        <boxGeometry args={[1.4, 1.5, 1]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Lamp({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/lamp.glb')
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

export function OpenBook({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/openBook.glb')
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

export function WallLamp({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/wallLamp.glb')
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

export function Pedestal({ position, scale }) {
  const { scene } = useGLTF('/models/pedestal.glb')
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/baseboard/baseboard_diff_1k.png',
    '/textures/baseboard/baseboard_nor_gl_1k.png',
    '/textures/baseboard/baseboard_rough_1k.png',
  ])
  const clone = useMemo(() => {
    const c = scene.clone()
    c.traverse((child) => {
      if (child.isMesh) {
        child.raycast = () => { }
        child.material = new THREE.MeshStandardMaterial({
          map: colorMap,
          normalMap: normalMap,
          roughnessMap: roughnessMap,
        })
      }
    })
    return c
  }, [scene, colorMap, normalMap, roughnessMap])

  return (
    <group position={position}>
      <primitive object={clone} scale={scale} rotation={[0, 0, 0]} />
      <mesh visible={false}>
        <cylinderGeometry args={[1, 0.5, 4, 5]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function CatStatue({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/concrete_cat_statue_1k.gltf/concrete_cat_statue_1k.gltf')
  const clone = useMemo(() => scene.clone(), [scene])
  return (
    <primitive
      object={clone}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

export function RopeBarrier({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/ropeBarrier.glb')

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh visible={false}>
        <boxGeometry args={[3, 1.5, 0.5]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Linkedin({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/linkedin.glb')
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

export function Mail({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/mail.glb')
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

export function Piano({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/piano.glb')

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh visible={false}>
        <boxGeometry args={[3.8, 3.5, 2.5]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Bookshelf({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/bookshelf.glb')

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh visible={false}>
        <boxGeometry args={[3.8, 3.5, 2.5]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function SleepingCat({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/sleepingCat.glb')

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
    <primitive object={clone} scale={scale} />
  )
}

export function Table({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/table.glb')

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh visible={false}>
        <boxGeometry args={[1.7, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Chair({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/chair.glb')

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh visible={false}>
        <boxGeometry args={[1, 2.5, 1.1]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Chess({ position, scale, rotation }) {
  const { scene } = useGLTF('/models/chess.glb')
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