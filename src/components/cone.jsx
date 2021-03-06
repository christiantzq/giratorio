import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Cone(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <coneGeometry args={[.7, 1, 32, 1, false]} />
        <meshStandardMaterial color={hovered ? 'gray' : 'pink'} />
      </mesh>
    )
  }