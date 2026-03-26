import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { projects } from '../data/projects'

export function Player({ openProject, playerPositionRef, onNearPainting }) {
  const keys = useRef({ forward: false, backward: false, left: false, right: false, shift: false })
  const { camera, scene } = useThree()
  const playerRef = useRef()
  const playerDir = useRef(new THREE.Vector3(0, 0, -1))
  const { scene: catscene, animations } = useGLTF('./models/cat/cat.glb')
  const { actions } = useAnimations(animations, playerRef)
  const isMoving = useRef(false)
  const catRef = useRef()

  // ← tous les objets créés une seule fois
  const raycaster = useRef(new THREE.Raycaster())
  const camRaycaster = useRef(new THREE.Raycaster())
  const direction = useRef(new THREE.Vector3())
  const forward = useRef(new THREE.Vector3())
  const right = useRef(new THREE.Vector3())
  const idealCamPos = useRef(new THREE.Vector3())
  const camDirection = useRef(new THREE.Vector3())
  const up = useRef(new THREE.Vector3(0, 1, 0))
  const safePos = useRef(new THREE.Vector3())
  const frameCount = useRef(0)

  useFrame(() => {
    if (!openProject) {
      const speed = keys.current.shift ? 0.10 : 0.05
      direction.current.set(0, 0, 0)
      camera.getWorldDirection(forward.current)
      forward.current.y = 0
      forward.current.normalize()
      right.current.crossVectors(forward.current, up.current)  // ← plus de new Vector3

      if (keys.current.forward) direction.current.add(forward.current)
      if (keys.current.backward) direction.current.sub(forward.current)
      if (keys.current.left) direction.current.sub(right.current)
      if (keys.current.right) direction.current.add(right.current)

      if (direction.current.length() > 0) {
        direction.current.normalize()
        raycaster.current.set(playerRef.current.position, direction.current)
        const intersects = raycaster.current.intersectObjects(scene.children, true)
        const blocked = intersects.length > 0 && intersects[0].distance < 0.6
        if (!blocked) {
          playerRef.current.position.addScaledVector(direction.current, speed)
          if (!keys.current.backward) {
            playerDir.current.lerp(direction.current, 0.05)
            playerDir.current.normalize()
          }
        }
      }

      // Position idéale de la caméra
      idealCamPos.current.set(
        playerRef.current.position.x - playerDir.current.x * 5,
        playerRef.current.position.y + 5,
        playerRef.current.position.z - playerDir.current.z * 5
      )

      // Direction caméra → joueur
      camDirection.current
        .copy(playerRef.current.position)
        .sub(idealCamPos.current)
        .normalize()

      camRaycaster.current.layers.set(1)
      camRaycaster.current.set(idealCamPos.current, camDirection.current)
      const camIntersects = camRaycaster.current.intersectObjects(scene.children, true)

      if (camIntersects.length > 0 && camIntersects[0].distance < 5) {
        safePos.current.copy(camIntersects[0].point)  // ← plus de .clone()
        safePos.current.addScaledVector(camDirection.current, 2.5)
        camera.position.lerp(safePos.current, 0.05)
      } else {
        camera.position.lerp(idealCamPos.current, 0.05)
      }

      camera.lookAt(playerRef.current.position)

      const moving = direction.current.length() > 0
      const running = moving && keys.current.shift

      if (moving && !isMoving.current) {
        isMoving.current = true
        actions['static']?.stop()
        running ? actions['run']?.play() : actions['walk']?.play()
      } else if (!moving && isMoving.current) {
        isMoving.current = false
        actions['walk']?.stop()
        actions['run']?.stop()
        actions['static']?.play()
      } else if (moving && isMoving.current) {
        if (running) {
          actions['walk']?.stop()
          actions['run']?.play()
        } else {
          actions['run']?.stop()
          actions['walk']?.play()
        }
      }

      if (catRef.current) {
        const angle = Math.atan2(playerDir.current.x, playerDir.current.z)
        catRef.current.rotation.y = angle
      }

      if (playerPositionRef?.current) {
        playerPositionRef.current.copy(playerRef.current.position)
      }

      // ── Détection tableaux toutes les 12 frames ──
      frameCount.current++
      if (frameCount.current % 12 === 0) {
        let found = null
        for (const [id, project] of Object.entries(projects)) {
          const dx = playerRef.current.position.x - project.position[0]
          const dz = playerRef.current.position.z - project.position[2]
          if (Math.sqrt(dx * dx + dz * dz) < 4) {
            found = id
            break
          }
        }
        onNearPainting?.(found)
      }
    }
  })

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'KeyW') keys.current.forward = true
      if (e.code === 'KeyS') keys.current.backward = true
      if (e.code === 'KeyA') keys.current.left = true
      if (e.code === 'KeyD') keys.current.right = true
      if (e.code === 'ShiftLeft') keys.current.shift = true
    }
    const onKeyUp = (e) => {
      if (e.code === 'KeyW') keys.current.forward = false
      if (e.code === 'KeyS') keys.current.backward = false
      if (e.code === 'KeyA') keys.current.left = false
      if (e.code === 'KeyD') keys.current.right = false
      if (e.code === 'ShiftLeft') keys.current.shift = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  useEffect(() => {
    actions['static']?.play()
  }, [actions])

  return (
    <group ref={playerRef} position={[0, 0.001, 0]}>
      <primitive
        ref={catRef}
        object={catscene}
        scale={[0.4, 0.5, 0.5]}
      />
    </group>
  )
}