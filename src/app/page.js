'use client'
import { Container } from 'reactstrap';
import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
import About from '../Sections/AboutMe';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';
import Contact from '../Sections/ContactMe';
import Footer from '../components/Footer';
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });


export default function Page() {
  return (
    <div className='text-light'>
      <div className="navbar-section">
        <Navbar />
      </div>
      <Container>
        <Hero className='mb-5' />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
        <Footer />
    </div>
  );
}
