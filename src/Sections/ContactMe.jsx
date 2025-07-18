import ContactForm from '../components/ContactForm';
import Li from '../../public/icons/linkedin.svg?react';
import Fb from '../../public/icons/facebook.svg?react';
import Ig from '../../public/icons/instagram.svg?react';
import Gh from '../../public/icons/github.svg?react';
import Image from 'next/image';


export default function Contact() {
  return (
    <section id="contact" className="contact-me mb-5 mt-5 p-4 bg-blue">
      <h2 className="text-center mb-4 text-uppercase">Get in touch</h2>
      <div className="form-container col col-lg-6 mx-auto">
        <ContactForm />
        <div className="divider">
          <hr className="line" />
          <span className="text">OR</span>
          <hr className="line" />
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abdalrahman-khlefat-884973200/" target="_blank" className="social-icon">
            <Image src={Li} className="icon" alt="LinkedIn" width={30} height={30} />
          </a>
          <a href="https://github.com/Abdelrahmankhlefat" target="_blank" className="social-icon">
            <Image src={Gh} className="icon" alt="GitHub" width={30} height={30} />
          </a>
        </div>
      </div>
    </section >
  )
}