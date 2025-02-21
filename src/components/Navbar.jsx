"use client"
import React, { useState, useEffect } from 'react';

function Example() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">AK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${activeId === 'about' ? 'active' : ''}`} href="#about">About me</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeId === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeId === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeId === 'contact' ? 'active' : ''}`} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Example;
