"use client"
import React, { useState } from 'react';
import Alien from '../components/Alien';

export default function Hero({ className }) {
  const [hideAlien, setHideALien] = useState(false);
  const [isFading, setIsFading] = useState(false);


  const HandleHideALien = () => {
    setIsFading(true);
    setTimeout(() => {
      setHideALien((prevHideALien) => !prevHideALien);
    }, 3000);
  }

  return (
    <div className={`hero d-flex align-items-center ${className}`}>
      <div className="banner text-light position-relative" >
        <div className="col col-12" >
          <div className="left-text">
            <p data-aos="fade-up-right">Hi, My name is</p>
            <div className="heading" data-aos="flip-down">
              <h1 className="display-3">Abed Al-Rahman Khlefat.</h1>
              <h2 className="lower display-5">and I build on <span className="text-secondary">Web.</span></h2>
            </div>
            <p className="short mt-3" data-aos="flip-down">I'm a Full stack developer Specialized in building and developing exceptional web experiences, currently I'm focused on building Web applications</p>
            <div className="d-flex gap-3">
              <a href="#about" className="btn btn-outline-secondary" >Find more</a>
              <a href="/Abed-alRahman-Khlefat.pdf" className="btn btn-outline-success" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-4">
          {
            !hideAlien &&
            <Alien className={`${isFading ? 'fade-out' : ''}`} Action={HandleHideALien} />
          }
        </div>

        <div className={`alien-disclaimer p-2 p-sm-3`}>
          {
            hideAlien 
            ? <p>The alien is very sad and apologizes for bothering you</p>
            : <p>If you were bothered by the alien, just click on it</p>
          }
          
        </div>
      </div>
    </div >
  )
}
