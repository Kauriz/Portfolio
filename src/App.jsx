import { Canvas } from '@react-three/fiber'
import { Player } from './components/Player'
import { SalleAccueil } from './components/halls/SalleAccueil'
import { CouloirAccueil } from './components/corridors/CouloirAccueil'
import { SalleProjet } from './components/halls/SalleProjet'
import { CouloirContact } from './components/corridors/CouloirContact'
import { SalleContact } from './components/halls/SalleContact'
import { CouloirProfil } from './components/corridors/CouloirProfil'
import { SalleProfil } from './components/halls/SalleProfil'
import { CouloirExperience } from './components/corridors/CouloirExperience'
import { SalleExperience } from './components/halls/SalleExperience'
import { useEffect, useState, useRef } from 'react'
import { projects } from './data/projects'
import * as THREE from 'three'
import { Stats, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import { Loader } from './components/Loader'
import { useProgress } from '@react-three/drei'

export default function App() {
  const [nearPainting, setNearPainting] = useState(null)
  const [openProject, setOpenProject] = useState(null)
  const playerPositionRef = useRef(new THREE.Vector3())
  const { progress } = useProgress()

  const [loading, setLoading] = useState(true)
  const [canvasReady, setCanvasReady] = useState(false)
  const [loaderFading, setLoaderFading] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    if (progress === 100 && canvasReady) {
      // 1. Loader commence à fader
      setLoaderFading(true)

      // 2. Loader retiré du DOM après son fondu (600ms) + petite pause noire (200ms)
      const t1 = setTimeout(() => setLoading(false), 800)

      // 3. Canvas apparaît après la pause noire
      const t2 = setTimeout(() => setShowCanvas(true), 1000)

      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [progress, canvasReady])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'KeyE' && nearPainting) {
        setOpenProject(nearPainting)
      }
      if (e.code === 'KeyE' && openProject) {
        setOpenProject(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [nearPainting, openProject])

  return (
    <>
      {loading && <Loader progress={progress} fading={loaderFading} />}

      <Canvas
        onCreated={() => setCanvasReady(true)}
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          inset: 0,
          opacity: showCanvas ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
        camera={{ position: [0, 1, 2], fov: 75 }}
        dpr={[0.5, 1]}
        gl={{
          antialias: false,
          powerPreference: 'high-performance'
        }}
      >
        <PerformanceMonitor
          onDecline={() => console.log('perf basse')}
          onIncline={() => console.log('perf haute')}
        >
          <AdaptiveDpr pixelated />
        </PerformanceMonitor>
        <Stats />
        <ambientLight color="#ffecd0" intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Player openProject={openProject} playerPositionRef={playerPositionRef} onNearPainting={setNearPainting} />
        <SalleAccueil />
        <CouloirAccueil />
        <SalleProjet
          onNear={(id) => setNearPainting(id)}
          onLeave={() => setNearPainting(null)}
          playerPositionRef={playerPositionRef}
        />
        <CouloirContact />
        <SalleContact />
        <CouloirProfil />
        <SalleProfil />
        <CouloirExperience />
        <SalleExperience
          onLeave={() => setNearPainting(null)}
          playerPositionRef={playerPositionRef}
          onNear={(id) => setNearPainting(id)}
        />
      </Canvas>

      {nearPainting && !openProject && (
        <div style={{
          position: 'fixed', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.7)',
          color: 'white', padding: '0.8rem 1.5rem',
          borderRadius: '8px', fontSize: '0.85rem'
        }}>
          Appuie sur E pour voir le projet
        </div>
      )}

      {openProject && (
        <div style={{
          position: 'fixed', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.7)',
          color: 'white', padding: '0.8rem 1.5rem',
          borderRadius: '8px', fontSize: '0.85rem'
        }}>
          Appuie sur E pour quitter
        </div>
      )}

      {openProject && (
        <div style={{
          position: 'fixed',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: 'rgba(0,0,0,0.85)',
          color: 'white',
          padding: '1rem',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          {Object.entries(projects[openProject]).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '1rem' }}>
              <strong style={{ textTransform: 'capitalize' }}>
                {key}
              </strong>
              <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                {Array.isArray(value) ? value.join(', ') : value}
              </div>
            </div>
          ))}
          <button onClick={() => setOpenProject(null)}>
            Fermer
          </button>
        </div>
      )}
    </>
  )
}