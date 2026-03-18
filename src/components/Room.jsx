import * as THREE from 'three'

export function Ground({position, args}) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position}>
    <planeGeometry args={args} />
    <meshStandardMaterial color="grey" side={2}/>
    </mesh>
  )
}

export function Wall({ position, rotation, color, args }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={color} side={2}/>
    </mesh>
  )
}

export function WallWithDoor({ position, rotation, color }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Côté gauche */}
      <mesh position={[-8.5, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>
      {/* Côté droit */}
      <mesh position={[-1.5, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>
      {/* Dessus */}
      <mesh position={[-5, 2, 0]}>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color={color} side={2} />
      </mesh>
    </group>
  )
}