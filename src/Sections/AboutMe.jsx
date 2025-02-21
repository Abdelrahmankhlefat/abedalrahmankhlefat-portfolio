import React from 'react';
import { Row, Col } from 'reactstrap';
import Image from "next/image";
import ProfilePic from '../../public/profile.jpg';

export default function About() {
  return (
    <section id="about" className="about-me p-4 mb-5">
      <h2 className="text-center mb-4 text-uppercase">About me</h2>
      <Row className="align-items-center justify-content-center">
        <Col lg="6" className="mb-4 mb-lg-0">
          <div className="fs-5" data-aos="fade-right">
            <p>
              I'm a passionate full-stack engineer dedicated to transforming ideas into seamless web experiences. After graduating from the <span className="text-secondary">University of Jordan</span> in 2023, I specialized in building responsive and intuitive applications using <span className="text-secondary">PHP (Laravel, Drupal)</span> and the <span className="text-secondary">MERN</span> stack (MongoDB, Express, React, Node.js). Whether building dynamic <span className="text-secondary">interactive front-end</span> interfaces or developing <span className="text-secondary"> robust back-end</span> architectures, I thrive on solving complex challenges and optimizing performance. Always eager to learn and adapt, I stay at the forefront of evolving technologies to create efficient, user-focused digital solutions.
            </p>
          </div>
        </Col>
        <Col lg="4">
          <div className="img-container ratio ratio-1x1 profile-image mx-auto">
            <Image src={ProfilePic} alt="profile-image" className="img-fluid rounded" />
          </div>
        </Col>
      </Row>
    </section>
  )
}
