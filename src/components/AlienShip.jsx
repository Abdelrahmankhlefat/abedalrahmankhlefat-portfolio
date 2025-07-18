"use client"
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from 'three'

export function ShipModel({ onClick }) {
  const mesh = useRef()
  const eyeRef = useRef()

  // Float animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * 0.5
    // mesh.current.rotation.x = Math.sin(t) * 0.8
    mesh.current.rotation.x = Math.sin(t) * 0.2
    mesh.current.position.y = Math.sin(t * 2) * 0.2 + 1
  })

  return (
    <group ref={mesh} onClick={onClick}>
      {/* Dome */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.75, 70, 70]} />
        <meshStandardMaterial color="grey" transparent opacity={0.4} metalness={0.1} roughness={0.3} />
      </mesh>

      {/* Alien */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="green" />

        {/* Eye */}
        <mesh ref={eyeRef} position={[0, 0.03, 0.3]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="white" />

          {/* Pupil */}
          <mesh position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.26, 32, 32]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </mesh>
      </mesh>

      {/* Ship base */}
      <mesh>
        {/* Bottom part - flat disc */}
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial color="#2E2D4D" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, -0.19999, 0]}>
        <coneGeometry args={[0.7, 2.4, 32]} />
        <meshStandardMaterial color="purple" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}
