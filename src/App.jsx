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
  const project = openProject ? projects[openProject] : null
  const [loading, setLoading] = useState(true)
  const [canvasReady, setCanvasReady] = useState(false)
  const [loaderFading, setLoaderFading] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const keyStyle = {
    width: '40px',
    height: '40px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  }

  useEffect(() => {
    if (showCanvas) {
      setOpenProject('projet12')
    }
  }, [showCanvas])
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
        <ambientLight color="#ffecd0" intensity={0.3} />
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
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          maxHeight: '85vh',
          overflowY: 'auto',
          background: 'rgba(0,0,0,0.85)',
          color: 'white',
          padding: '1rem',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            {project.title && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: "2rem" }}>
                  {project.title}
                </strong>
                <br></br>
                <br></br>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.shortDescription}
                </div>
                <br></br>
              </>
            )}

            {project.objectives && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                  Objectifs
                </strong>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.objectives}
                </div>
                <br></br>
              </>
            )}

            {project.description && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                  Description
                </strong>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.description}
                </div>
                <br></br>
              </>
            )}

            {project.tools && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                  Outils
                </strong>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.tools}
                </div>
                <br></br>
              </>
            )}

            {project.perspectives && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: '1.2rem' }}>
                  Perspective
                </strong>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.perspectives}
                </div>
                <br></br>
              </>
            )}

            {project.conclusion && (
              <>
                <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                  Conclusion
                </strong>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.conclusion}
                </div>
                <br></br>
              </>
            )}

            {project.mail && (
              <>
                <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                  {project.mail}
                </div>
                <br></br>
              </>
            )}
            {Array.isArray(project.tuto) && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "15rem" }}>

                {/* Croix directionnelle */}
                <div style={{ display: 'grid', gridTemplateColumns: '40px 40px 40px', gridTemplateRows: '40px 40px 40px', gap: '4px' }}>
                  {/* Haut */}
                  <div />
                  <div style={keyStyle}>Z</div>
                  <div />
                  {/* Milieu */}
                  <div style={keyStyle}>Q</div>
                  <div style={{ ...keyStyle, opacity: 0.2 }}>·</div>
                  <div style={keyStyle}>D</div>
                  {/* Bas */}
                  <div />
                  <div style={keyStyle}>S</div>
                  <div />
                </div>

                {/* Shift + E */}
                <div style={{ display: 'flex', gap: '1rem', flexDirection: "column" }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ ...keyStyle, width: '80px' }}>Shift</div>
                    <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>Sprinter</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={keyStyle}>E</div>
                    <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>Interagir</span>
                  </div>
                </div>

              </div>
            
            )}
          </div>

          {project.title && (
            <button onClick={() => setOpenProject(null)}>
              Fermer
            </button>
          )}
        </div>
      )}
    </>
  )
}