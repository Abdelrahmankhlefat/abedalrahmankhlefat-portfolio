import React from 'react';
import Image from 'next/image';
import Li from '../../public/icons/linkedin.svg?react';
import Fb from '../../public/icons/facebook.svg?react';
import Ig from '../../public/icons/instagram.svg?react';
import Gh from '../../public/icons/github.svg?react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4 mb-3">
            <h5>About Me</h5>
            <p>
              I'm a passionate developer specializing in creating modern and responsive web applications.
              Let's build something amazing together!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none footer-link">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none footer-link">About</a></li>
              <li><a href="#projects" className="text-light text-decoration-none footer-link">Projects</a></li>
              <li><a href="#contact" className="text-light text-decoration-none footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Me</h5>
            <p>
              Email: <a href="mailto:abedalrahmankhlefat@gmail.com" className="text-light text-decoration-none footer-link">abedalrahmankhlefat@gmail.com</a>
            </p>
            <div className="social-icons footer-icons">
              <a href="https://www.linkedin.com/in/abdalrahman-khlefat-884973200/" target="_blank" className="social-icon text-light footer-link">
                <Image src={Li} className="icon" alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://www.facebook.com/abedalrahman.khlefat/" target="_blank" className="social-icon text-light footer-link">
                <Image src={Fb} className="icon" alt="Facebook" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/abedalrahmankhlefat/" target="_blank" className="social-icon text-light footer-link">
                <Image src={Ig} className="icon" alt="Instagram" width={30} height={30} />
              </a>
              <a href="https://github.com/Abdelrahmankhlefat" target="_blank" className="social-icon text-light footer-link">
                <Image src={Gh} className="icon" alt="GitHub" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Abed al Rahman Khlefat. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;