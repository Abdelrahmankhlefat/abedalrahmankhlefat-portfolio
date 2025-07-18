// "use client"
import React, { useState } from "react"
// import Alien3D from "../components/Alien3d.js"

export default function Hero({ className }) {
  const [hideAlien, setHideAlien] = useState(false)
  const [isFading, setIsFading] = useState(false)

  const handleHideAlien = () => {
    setIsFading(true)
    setTimeout(() => {
      setHideAlien((prev) => !prev)
    }, 3000)
  }

  return (
    <div className={`hero d-flex align-items-center ${className}`}>
      <div className="banner text-light position-relative">
        <div className="col col-12">
          <div className="left-text">
            <p data-aos="fade-up-right">Hi, My name is</p>
            <div className="heading" data-aos="flip-down">
              <h1 className="display-3">Abed Al-Rahman Khlefat.</h1>
              <h2 className="lower display-5">
                and I build on <span className="text-secondary">Web.</span>
              </h2>
            </div>
            <p className="short mt-3" data-aos="flip-down">
              I'm a Full stack developer specialized in building and developing exceptional web
              experiences. Currently, I'm focused on building Web applications.
            </p>
            <div className="d-flex gap-3">
              <a href="#about" className="btn btn-outline-secondary">
                Find more
              </a>
              <a
                href="/AbedalRahmanKhlefat.pdf"
                className="btn btn-outline-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        <div className="col col-12 col-md-4">
          {
            !hideAlien &&
            <div className={`${isFading ? 'fade-out' : ''}`}>
              {/* <Alien3D Action={handleHideAlien} /> */}
            </div>
          }
        </div>

        <div className="alien-disclaimer p-2 p-sm-3">
          {hideAlien ? (
            <p>The alien is very sad and apologizes for bothering you</p>
          ) : (
              <p>If you were bothered by the alien, just click on it</p>
            )}
        </div>
      </div>
    </div>
  )
}