"use client"
import React, { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { ShipModel } from "./AlienShip"

export default function Alien3D({ Action }) {
  const [mobileDevice, setMobileDevice] = useState(false)
  const [position, setPosition] = useState({ top: 200, left: 1000 })
  const [canvasSize, setCanvasSize] = useState({ width: '300px', height: '400px' })

  useEffect(() => {
    const isMobile = window.innerWidth < 991
    setMobileDevice(isMobile)

    const top = isMobile ? 100 : 200
    const left = isMobile ? 200 : 1000
    setPosition({ top, left })

    const width = isMobile ? '150px' : '300px'
    const height = isMobile ? '300px' : '400px'
    setCanvasSize({ width, height })
  }, [])

  const getRandomPosition = () => {
    const maxTop = window.innerHeight - 300
    const maxLeft = window.innerWidth - 300
    const top = Math.floor(Math.random() * maxTop)
    const left = Math.floor(Math.random() * maxLeft)
    return { top, left }
  }

  const handleMouseEnter = () => {
    if (!mobileDevice) {
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
        width: canvasSize.width,
        height: canvasSize.height,
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
