"use client"
import React, { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { ShipModel } from "./AlienShip"

export default function Alien3D({ Action }) {
  // Initial position
  const [position, setPosition] = useState({ top: 400, left: 400 })

  const getRandomPosition = () => {
    const maxTop = window.innerHeight - 300
    const maxLeft = window.innerWidth - 300
    const top = Math.floor(Math.random() * maxTop)
    const left = Math.floor(Math.random() * maxLeft)
    return { top, left }
  }

  const handleMouseEnter = () => {
    if (window.innerWidth > 991) {
      setPosition(getRandomPosition())
    }
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{
        position: "fixed",
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: "300px",
        height: "300px",
        zIndex: 10,
        transition: "top 0.4s ease, left 0.4s ease",
      }}
    >
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ShipModel onClick={Action} />
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
