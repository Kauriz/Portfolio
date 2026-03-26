import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Text } from '@react-three/drei'

useTexture.preload([
  '/textures/wall/wall_diff_1k.png',
  '/textures/wall/wall_nor_gl_1k.png',
  '/textures/wall/wall_rough_1k.png',
  '/textures/floor/floor_02_diff_1k.png',
  '/textures/floor/floor_02_nor_gl_1k.png',
  '/textures/floor/floor_02_rough_1k.png',
  '/textures/baseboard/baseboard_diff_1k.png',
  '/textures/baseboard/baseboard_nor_gl_1k.png',
  '/textures/baseboard/baseboard_rough_1k.png',
])

useGLTF.preload('./models/frame/frame.gltf')
useGLTF.preload('./models/sofa/sofa.gltf')
useGLTF.preload('./models/door.glb')
useGLTF.preload('./models/dresser.glb')
useGLTF.preload('./models/lamp.glb')
useGLTF.preload('./models/openBook.glb')
useGLTF.preload('./models/wallLamp.glb')
useGLTF.preload('./models/pedestal.glb')
useGLTF.preload('./models/concrete_cat_statue_1k.gltf/concrete_cat_statue_1k.gltf')
useGLTF.preload('./models/ropeBarrier.glb')
useGLTF.preload('./models/linkedin.glb')
useGLTF.preload('./models/mail.glb')
useGLTF.preload('./models/piano.glb')
useGLTF.preload('./models/bookshelf.glb')
useGLTF.preload('./models/sleepingCat.glb')
useGLTF.preload('./models/table.glb')
useGLTF.preload('./models/chair.glb')
useGLTF.preload('./models/chess.glb')
useGLTF.preload('./models/paintingLamp.glb')
useGLTF.preload('./models/lightSwitch.glb')

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
    <mesh position={position} rotation={rotation} onUpdate={(mesh) => mesh.layers.enable(1)} receiveShadow>
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
      <mesh position={[-8.5, 0, 0]} receiveShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau droit */}
      <mesh position={[-1.5, 0, 0]} receiveShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
        <planeGeometry args={[3, 10]} />
        {sideMat}
      </mesh>

      {/* Panneau du dessus */}
      <mesh position={[-5, 2, 0]} receiveShadow onUpdate={(mesh) => mesh.layers.enable(1)}>
        <planeGeometry args={[4, 6]} />
        {topMat}
      </mesh>
    </group>
  )
}

export function PaintingFrame({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/frame/frame.gltf')
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
    <mesh position={position} rotation={rotation} onUpdate={(mesh) => mesh.layers.enable(1)}>
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
  const { scene } = useGLTF('./models/door.glb')
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
        <boxGeometry args={[scale[0]*150, scale[1]*220, scale[2]*10]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Sofa({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/sofa/sofa.gltf')
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
        <boxGeometry args={[scale[0]*1.6, scale[1]*1.4, scale[2]*0.7]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Dresser({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/dresser.glb')
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
        <boxGeometry args={[scale[0]*0.66, scale[1]*1.4, scale[2]*0.48]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Lamp({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/lamp.glb')
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
      <pointLight
        color="#ffb347"
        intensity={8}
        distance={6}
        decay={2}
        position={[0, 0, 0.5]}
      />
    </group>
  )
}

export function OpenBook({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/openBook.glb')
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
  const { scene } = useGLTF('./models/wallLamp.glb')
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
      <pointLight
        color="#ffb347"
        intensity={8}
        distance={6}
        decay={2}
        position={[0, 0, 0.5]}
      />
    </group>
  )
}

export function Pedestal({ position, scale }) {
  const { scene } = useGLTF('./models/pedestal.glb')
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
  const { scene } = useGLTF('./models/concrete_cat_statue_1k.gltf/concrete_cat_statue_1k.gltf')
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
  const { scene } = useGLTF('./models/ropeBarrier.glb')

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
        <boxGeometry args={[scale[0]*280, scale[1]*160, scale[2]*45]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Linkedin({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/linkedin.glb')
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
  const { scene } = useGLTF('./models/mail.glb')
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
  const { scene } = useGLTF('./models/piano.glb')

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
        <boxGeometry args={[scale[0]*0.65, scale[1]*0.54, scale[2]*0.38]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Bookshelf({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/bookshelf.glb')

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
        <boxGeometry args={[scale[0]*3.5, scale[1]*4.2, scale[2]*1]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function SleepingCat({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/sleepingCat.glb')

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
  const { scene } = useGLTF('./models/table.glb')

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
        <boxGeometry args={[scale[0]*1.9, scale[1]*0.85, scale[2]]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Chair({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/chair.glb')

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
        <boxGeometry args={[scale[0]*4, scale[1]*8, scale[2]*4]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Chess({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/chess.glb')
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

RectAreaLightUniformsLib.init()
export function PaintingLamp({ position, scale, rotation, playerPositionRef }) {
  const { scene } = useGLTF('./models/paintingLamp.glb')
  const lightRef = useRef()
  const pos = useMemo(() => new THREE.Vector3(...position), [position])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!lightRef.current || !playerPositionRef?.current) return
      lightRef.current.visible = playerPositionRef.current.distanceTo(pos) < 4
    }, 1000) // ← vérifie toutes les 500ms au lieu de 60x/seconde
    return () => clearInterval(interval)
  }, [pos])

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
      <rectAreaLight
        ref={lightRef}
        color="#ffecd0"
        intensity={3}
        width={3}
        height={3}
        position={[0, -0.5, 0.5]}
        rotation={[Math.PI / 4, Math.PI, 0]}
      />
    </group>
  )
}

export function PawPrint({ position, rotation, scale, color }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Bosse gauche du coeur */}
      <mesh position={[0, 0, -0.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.35, 0.4, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Orteil gauche */}
      <mesh position={[-0.5, 0, -0.45]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.15, 0.17, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Orteil centre gauche */}
      <mesh position={[-0.18, 0, -0.8]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.17, 0.2, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Orteil centre droit */}
      <mesh position={[0.18, 0, -0.8]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.17, 0.2, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Orteil droit */}
      <mesh position={[0.5, 0, -0.45]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.15, 0.17, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
}

export function LightSwitch({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/lightSwitch.glb')

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

export function Plant1({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/plant1.glb')
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

export function Desk({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/desk.glb')

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
        <boxGeometry args={[scale[0]*2.3, scale[1]*0.85, scale[2]]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function ChalkBoard({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/chalkboard.glb')

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
        <boxGeometry args={[scale[0]*3.5, scale[1]*11, scale[2]*10]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Easel({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/easel.glb')

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
        <boxGeometry args={[scale[0]*1, scale[1]*2, scale[2]*1.5]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

export function Canva({ position, scale, rotation }) {
  const { scene } = useGLTF('./models/canvas.glb')
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

        // 👉 FORCE un matériau plus lumineux
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.7,
          metalness: 0
        })
      }
    })
    return c
  }, [scene])

  return (
    <primitive object={clone} scale={scale} position={position} rotation={rotation} />
  )
}

export function UnderShelf({ position, rotation, scale }) {
  const { scene } = useGLTF('./models/underShelf.glb')
  const colliderRef = useRef()

  useEffect(() => {
    if (colliderRef.current) {
      colliderRef.current.layers.enable(1)
    }
  }, [])

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
    <group position={position} rotation={rotation}>
      <primitive object={clone} scale={scale} />
      <mesh ref={colliderRef} visible={false}>
        <boxGeometry args={[scale[0]*650, scale[1]*1500, scale[2]*400]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}