import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './components/box'
import Sphere from './components/sphere'
import Torus from './components/torus'
import Cone from './components/cone'
import Text from './components/text'

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Box position={[-1.2, 0, 0]} />
      <Sphere position={[1.2, 0, 0]} />
      <Torus position={[3.2, 0, 0]} />
      <Cone position={[-3.2, 0, 0]} />
      {/* <Text position={[1.2, -3, 0]} /> */}

    </Canvas>
  )
}