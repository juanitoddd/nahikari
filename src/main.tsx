import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Scene } from './Scene'
import './styles/main.css'

function Main() {
  return (
    <div className='main'>
      <h1>Hola, Que tengas un bonito dia</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
