import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'

export function Player() {
  const keys = useRef({ forward: false, backward: false, left: false, right: false })
  const { camera, scene } = useThree()
  useFrame(() => {
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
    if (keys.current.right) direction.add(right)
    if (keys.current.left) direction.sub(right)

    direction.normalize()
    const raycaster = new THREE.Raycaster()
    raycaster.set(camera.position, direction)
    const intersects = raycaster.intersectObjects(scene.children, true)

    const blocked = intersects.length > 0 && intersects[0].distance < 0.6

    if (!blocked) {
      camera.position.addScaledVector(direction, speed)
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
  return(
    <PointerLockControls />
  )
}