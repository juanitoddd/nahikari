import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Scene } from './Scene'
import { Model } from './components/Flower'
import { OrbitControls } from '@react-three/drei'
import './main.css'

function Main() {
  return (
    <div className='grid h-screen' style={{gridTemplateRows:'100px 1fr 300px'}}>
      <div className='flex items-center justify-center'>
        <h1 className='font-bold text-lg'>Una flor para otra flor</h1>
      </div>
      <Canvas camera={{ fov: 64,  zoom: 3, near: 2, position: [0, 5, 10] }}>
        <ambientLight intensity={5} />
        <OrbitControls enableZoom={true} />      
        <Model/>      
      </Canvas>
      <div className='flex items-center justify-center'>
        <h1>Que tengas un bonito dia</h1>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
