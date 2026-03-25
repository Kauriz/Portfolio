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

export default function App() {
  const [nearPainting, setNearPainting] = useState(null)
  const [openProject, setOpenProject] = useState(null)
  const playerPositionRef = useRef(new THREE.Vector3())

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
      <Canvas
        style={{ width: '100%', height: '100vh' }}
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
        <Player openProject={openProject} playerPositionRef={playerPositionRef} />
        {/* Hall d'accueil */}
        <SalleAccueil />
        {/* Couloir Hall d'accueil */}
        <CouloirAccueil />
        {/* Pièce principale de projet */}
        <SalleProjet
          onNear={(id) => setNearPainting(id)}
          onLeave={() => setNearPainting(null)}
          playerPositionRef={playerPositionRef}
        />
        {/* Couloir engagement personnels et contact */}
        <CouloirContact />
        {/* Pièce engagement personnels et contact */}
        <SalleContact />
        {/* Couloir profil */}
        <CouloirProfil />
        {/* Pièce profil */}
        <SalleProfil />
        {/* Couloir expérience */}
        <CouloirExperience />
        {/* Pièce expérience */}
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
          position: 'fixed', bottom: '50%',
          left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.7)',
          color: 'white', padding: '0.8rem 1.5rem',
          borderRadius: '8px', fontSize: '0.85rem'
        }}>
          {Object.entries(projects[openProject]).map(([key, value]) => (
            <div key={key}>
              <strong>{key}</strong> : {Array.isArray(value) ? value.join(', ') : value}
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