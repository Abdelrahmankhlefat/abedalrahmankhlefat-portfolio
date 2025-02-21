"use client"
import React, { useState } from 'react';

export default function Alien({ Action, className }) {
  // Initial position
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * window.innerHeight * 0.8);
    const left = Math.floor(Math.random() * window.innerWidth * 0.8);
    return { top, left };
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 991) {
      setPosition(getRandomPosition());
    }
  };

  return (
    <div className={`ship ${className}`} onMouseEnter={handleMouseEnter} onClick={Action}
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        transition: 'top 0.5s ease, left 0.5s ease',
      }}
    >
      <div className="dom">
        <div className="alien"></div>
      </div>
      <div className="ship-body"></div>
      <div className="ship-tail"></div>
    </div>
  )
}
