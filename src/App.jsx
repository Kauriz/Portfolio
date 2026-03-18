import { Canvas } from '@react-three/fiber'
import { Player } from './components/Player'
import { Ground, Wall, WallWithDoor } from './components/Room'

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }} camera={{ position: [0, 1, 2], fov: 75 }}>
      <ambientLight intensity={2} />
      <Player />
      {/* Hall d'accueil */}
      <Ground position={[0, 0, 0]} args={[10,10]}/>
      <Ground position={[0, 10, 0]} args={[10,10]}/>
      <Wall position={[0, 5, 5]} rotation={[0, Math.PI, 0]} color={"blue"} args={[10,10]}/>
      <Wall position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]} color={"green"} args={[10,10]}/>
      <Wall position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,10]}/>
      <WallWithDoor position={[5,5,-5]} rotation={[0, 0, 0]} color={"red"}/>

      {/* Couloir Hall d'accueil */}
      <Ground position={[0, 0, -10]} args={[4,10]}/>
      <Ground position={[0, 4, -10]} args={[4,10]}/>
      <Wall position={[2, 2, -10]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,4]}/>
      <Wall position={[-2, 2, -10]} rotation={[0, Math.PI / 2, 0]} color={"green"} args={[10,4]}/>
      <WallWithDoor position={[5,5,-15]} rotation={[0, 0, 0]} color={"red"}/>
      {/* Pièce principale de projet */}
      <Ground position={[0, 0, -25]} args={[20,20]}/>
      <Ground position={[0, 10, -25]} args={[20,20]}/>
      <Wall position={[-7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5,10]}/>
      <Wall position={[7.5, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[5,10]}/>
      <WallWithDoor position={[-10,5,-15]} rotation={[0, -Math.PI / 2, 0]} color={"green"}/>
      <WallWithDoor position={[-10,5,-25]} rotation={[0, -Math.PI / 2, 0]} color={"green"}/>
      <WallWithDoor position={[5,5,-35]} rotation={[0, 0, 0]} color={"blue"}/>
      <Wall position={[7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5,10]}/>
      <Wall position={[-7.5, 5, -35]} rotation={[0, 0, 0]} color={"blue"} args={[5,10]}/>
      <WallWithDoor position={[10,5,-20]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"}/>
      <Wall position={[10, 5, -17.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5,10]}/>
      <Wall position={[10, 5, -32.5]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[5,10]}/>
      {/* Couloir engagement personnels et contact*/}
      <Ground position={[-15, 0, -30]} args={[10,4]}/>
      <Ground position={[-15, 4, -30]} args={[10,4]}/>
      <Ground position={[-15, 0, -20]} args={[10,4]}/>
      <Ground position={[-15, 4, -20]} args={[10,4]}/>
      <Wall position={[-15, 2, -22]} rotation={[0, 0, 0]} color={"blue"} args={[10,4]}/>
      <Wall position={[-15, 2, -18]} rotation={[0, 0, 0]} color={"red"} args={[10,4]}/>
      <WallWithDoor position={[-20,5,-15]} rotation={[0, -Math.PI / 2, 0]} color={"green"}/>
      <Wall position={[-15, 2, -32]} rotation={[0, 0, 0]} color={"blue"} args={[10,4]}/>
      <Wall position={[-15, 2, -28]} rotation={[0, 0, 0]} color={"red"} args={[10,4]}/>
      <WallWithDoor position={[-20,5,-25]} rotation={[0, -Math.PI / 2, 0]} color={"green"}/>
      {/* Pièce engagement personnels et contact*/}
      <Ground position={[-25, 0, -20]} args={[10,10]}/>
      <Ground position={[-25, 10, -20]} args={[10,10]}/>
      <Ground position={[-25, 10, -30]} args={[10,10]}/>
      <Ground position={[-25, 0, -30]} args={[10,10]}/>
      <Wall position={[-25, 5, -15]} rotation={[0, 0, 0]} color={"red"} args={[10,10]}/>
      <Wall position={[-25, 5, -35]} rotation={[0, 0, 0]} color={"red"} args={[10,10]}/>
      <Wall position={[-30, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[20,10]}/>
      {/* Couloir profil */}
      <Ground position={[15, 0, -25]} args={[10,4]}/>
      <Ground position={[15, 4, -25]} args={[10,4]}/>
      <Wall position={[15, 2, -23]} rotation={[0, 0, 0]} color={"red"} args={[10,4]}/>
      <Wall position={[15, 2, -27]} rotation={[0, 0, 0]} color={"blue"} args={[10,4]}/>
      <WallWithDoor position={[20,5,-20]} rotation={[0, -Math.PI / 2, 0]} color={"green"}/>
      {/* Pièce profil */}
      <Ground position={[25, 0, -25]} args={[10,10]}/>
      <Ground position={[25, 10, -25]} args={[10,10]}/>
      <Wall position={[25, 5, -30]} rotation={[0, 0, 0]} color={"blue"} args={[10,10]}/>
      <Wall position={[25, 5, -20]} rotation={[0, 0, 0]} color={"red"} args={[10,10]}/>
      <Wall position={[30, 5, -25]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,10]}/>
      {/* Couloir expérience */}
      <Ground position={[0, 0, -40]} args={[4,10]}/>
      <Ground position={[0, 4, -40]} args={[4,10]}/>
      <Wall position={[2, 2, -40]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,4]}/>
      <Wall position={[-2, 2, -40]} rotation={[0, -Math.PI / 2, 0]} color={"green"} args={[10,4]}/>
      <WallWithDoor position={[20,5,-20]} rotation={[0, -Math.PI / 2, 0]} color={"red"}/>
      {/* Pièce expérience */}
      <Ground position={[0, 0, -50]} args={[10,10]}/>
      <Ground position={[0, 10, -50]} args={[10,10]}/>
      <WallWithDoor position={[5,5,-45]} rotation={[0, 0, 0]} color={"red"}/>
      <Wall position={[5, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"green"} args={[10,10]}/>
      <Wall position={[-5, 5, -50]} rotation={[0, -Math.PI / 2, 0]} color={"yellow"} args={[10,10]}/>
      <Wall position={[0,5,-55]} rotation={[0, 0, 0]} color={"blue"} args={[10,10]}/>
    </Canvas>
  )
}