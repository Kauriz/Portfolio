import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function Player({ openProject }) {
  const keys = useRef({ forward: false, backward: false, left: false, right: false })
  const { camera, scene } = useThree()
  const playerRef = useRef()
  const playerDir = useRef(new THREE.Vector3(0, 0, 1))

  useFrame(() => {
    if (!openProject) {
      const speed = 0.05
      const direction = new THREE.Vector3()
      const forward = new THREE.Vector3()
      const right = new THREE.Vector3()

      camera.getWorldDirection(forward)
      forward.y = 0
      forward.normalize()

      right.crossVectors(forward, new THREE.Vector3(0, 1, 0))

      if (keys.current.forward) direction.add(forward)
      if (keys.current.backward) direction.sub(forward)
      if (keys.current.left) direction.sub(right)
      if (keys.current.right) direction.add(right)

      if (direction.length() > 0) {
        direction.normalize()
        const raycaster = new THREE.Raycaster()
        raycaster.set(playerRef.current.position, direction)
        const intersects = raycaster.intersectObjects(scene.children, true)
        const blocked = intersects.length > 0 && intersects[0].distance < 0.6
        if (!blocked) {
          playerRef.current.position.addScaledVector(direction, speed)
          if (!keys.current.backward)
          {
            playerDir.current.lerp(direction, 0.05)
            playerDir.current.normalize()
          }
        }
      }

      // Position idéale de la caméra
      const idealCamPos = new THREE.Vector3(
        playerRef.current.position.x - playerDir.current.x * 5,
        playerRef.current.position.y + 5,
        playerRef.current.position.z - playerDir.current.z * 5
      )

      // Rayon du joueur vers la caméra
      const camRaycaster = new THREE.Raycaster()
      const camDirection = playerRef.current.position.clone().sub(idealCamPos).normalize()
      camRaycaster.set(idealCamPos, camDirection)
      const camIntersects = camRaycaster.intersectObjects(scene.children, true)

      if (camIntersects.length > 0 && camIntersects[0].distance < 5) {
        const safePos = camIntersects[0].point.clone()
        safePos.addScaledVector(camDirection, 2.5)
        camera.position.lerp(safePos, 0.05)
      } else {
        camera.position.lerp(idealCamPos, 0.05)
      }

      camera.lookAt(playerRef.current.position)
    }
  })

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'KeyW') keys.current.forward = true
      if (e.code === 'KeyS') keys.current.backward = true
      if (e.code === 'KeyA') keys.current.left = true
      if (e.code === 'KeyD') keys.current.right = true
    }
    const onKeyUp = (e) => {
      if (e.code === 'KeyW') keys.current.forward = false
      if (e.code === 'KeyS') keys.current.backward = false
      if (e.code === 'KeyA') keys.current.left = false
      if (e.code === 'KeyD') keys.current.right = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <mesh ref={playerRef} position={[0, 1, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  )
}