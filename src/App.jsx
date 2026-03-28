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
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei'
import { Loader } from './components/Loader'
import { useProgress } from '@react-three/drei'

export default function App() {
  const [nearPainting, setNearPainting] = useState(null)
  const [openProject, setOpenProject] = useState(null)
  const [activeVersion, setActiveVersion] = useState(0)
  const playerPositionRef = useRef(new THREE.Vector3())
  const { progress } = useProgress()
  const project = openProject ? projects[openProject] : null
  const [loading, setLoading] = useState(true)
  const [canvasReady, setCanvasReady] = useState(false)
  const [loaderFading, setLoaderFading] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)

  // Données de la version active (rétrocompatible)
  const hasVersions = project?.versions && project.versions.length > 0
  const currentData = hasVersions ? project.versions[activeVersion] : project

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
      setLoaderFading(true)
      const t1 = setTimeout(() => setLoading(false), 800)
      const t2 = setTimeout(() => setShowCanvas(true), 1000)
      return () => { clearTimeout(t1); clearTimeout(t2) }
    }
  }, [progress, canvasReady])

  useEffect(() => {
    // Reset l'onglet actif quand on change de projet
    setActiveVersion(0)
  }, [openProject])

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

      {openProject && project && (
        <div style={{
          position: 'fixed',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          width: '85%',
        }}>

          {/* Wrapper fenêtre 1 + bouton */}
          <div style={{ position: 'relative', width: '45%', flexShrink: 0 }}>

            {/* Onglets */}
            {hasVersions && (
              <div style={{ display: 'flex' }}>
                {project.versions.map((version, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVersion(index)}
                    style={{
                      padding: '0.4rem 1rem',
                      background: activeVersion === index ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderBottom: activeVersion === index ? 'none' : '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '6px 6px 0 0',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: activeVersion === index ? 'bold' : 'normal',
                    }}
                  >
                    {version.label}
                  </button>
                ))}
              </div>
            )}

            {/* Fenêtre 1 */}
            <div style={{
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              background: 'rgba(0,0,0,0.85)',
              color: 'white',
              padding: '1rem',
              borderRadius: hasVersions ? '0 8px 8px 8px' : '8px',
              fontSize: '0.9rem',
            }}>
              <div style={{ marginBottom: '1rem' }}>
                {currentData.title && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: "2rem" }}>
                      {currentData.title}
                    </strong>
                    <br />
                    <br />
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.shortDescription}
                    </div>
                    <br />
                  </>
                )}

                {currentData.objectives && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                      Objectifs
                    </strong>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.objectives}
                    </div>
                    <br />
                  </>
                )}

                {currentData.description && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                      Description
                    </strong>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.description}
                    </div>
                    <br />
                  </>
                )}

                {currentData.tools && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                      Outils
                    </strong>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.tools}
                    </div>
                    <br />
                  </>
                )}

                {currentData.perspectives && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: '1.2rem' }}>
                      Perspective
                    </strong>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.perspectives}
                    </div>
                    <br />
                  </>
                )}

                {currentData.conclusion && (
                  <>
                    <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                      Conclusion
                    </strong>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.conclusion}
                    </div>
                    <br />
                  </>
                )}

                {currentData.mail && (
                  <>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.mail}
                    </div>
                    <br />
                  </>
                )}

                {currentData.linkedin && (
                  <>
                    <div style={{ marginTop: '0.3rem', whiteSpace: 'pre-line' }}>
                      {currentData.linkedin}
                    </div>
                    <br />
                  </>
                )}

                {Array.isArray(currentData.tuto) && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "15rem" }}>
                    {/* Croix directionnelle */}
                    <div style={{ display: 'grid', gridTemplateColumns: '40px 40px 40px', gridTemplateRows: '40px 40px 40px', gap: '4px' }}>
                      <div />
                      <div style={keyStyle}>Z</div>
                      <div />
                      <div style={keyStyle}>Q</div>
                      <div style={{ ...keyStyle, opacity: 0.2 }}>·</div>
                      <div style={keyStyle}>D</div>
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
            </div>

            {/* Bouton GitHub */}
            {currentData.github && (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(0,0,0,0.85)',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  width: "120px",
                  height: "120px",
                  position: "absolute",
                  transform: "translate(120%,-100%)",
                  borderColor: 'transparent'
                }}
                  href={currentData.github}
                  target="_blank"
                >
                  <img src='/textures/logoGithub.png' style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', transform: "translate(0%,10%)" }} />
              
                </a>
              </div>
            )}
          </div>

          {/* Fenêtre 2 */}
          {currentData.previsualisation && (
            <div style={{
              width: "45%",
              maxHeight: '45vh',
              overflowY: 'auto',
              background: 'rgba(0,0,0,0.85)',
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              transform: 'translate(0%,7.2%)',
              fontSize: '0.9rem'
            }}>
              <strong style={{ textTransform: 'capitalize', fontSize: "1.2rem" }}>
                Previsualisation
              </strong>
              <img src={currentData.previsualisation} style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', marginTop: "1rem" }} />
            </div>
          )}

        </div>
      )}

      {openProject && project?.title && (
        <button onClick={() => setOpenProject(null)}>
          Fermer
        </button>
      )}
    </>
  )
}