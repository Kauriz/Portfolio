// src/components/Loader.jsx
export function Loader({ progress }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      fontFamily: 'sans-serif',
      color: 'white',
    }}>
      {/* Titre */}
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', letterSpacing: '0.2em' }}>
        PORTFOLIO
      </h1>

      {/* Barre de progression */}
      <div style={{
        width: '300px',
        height: '3px',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '2px',
        marginTop: '2rem',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'white',
          borderRadius: '2px',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Pourcentage */}
      <p style={{
        marginTop: '1rem',
        fontSize: '0.85rem',
        opacity: 0.5,
        letterSpacing: '0.1em',
      }}>
        {Math.round(progress)}%
      </p>
    </div>
  )
}