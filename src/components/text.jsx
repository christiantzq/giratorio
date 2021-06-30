import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { TextGeometry } from 'three'

export default function Text(props) {
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
        <TextGeometry args={["Naomi", {size:1, height:1}]} />
        <meshStandardMaterial color={hovered ? 'black' : 'red'} />
      </mesh>
    )
  }