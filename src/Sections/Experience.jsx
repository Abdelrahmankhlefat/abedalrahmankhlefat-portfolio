import Image from "next/image";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import HTML from '../../public/icons/html5-plain.svg';
import CSS from '../../public/icons/css3-plain.svg';
import JS from '../../public/icons/javascript-original.svg';
import Ex from '../../public/icons/express-original-wordmark.svg';
import JQuery from '../../public/icons/jquery-original-wordmark.svg';
import Mongo from '../../public/icons/mongodb-plain.svg';
import Sassy from '../../public/icons/sass-original.svg';
import PHP from '../../public/php.png';
import Laravel from '../../public/icons/laravel-original.svg';
import Re from '../../public/icons/react-original.svg';
import Drupal from '../../public/icons/drupal-plain.svg';
import Node from '../../public/Node.png';
import BS from '../../public/bootstrap.png';
import TS from '../../public/icons/typescript-original.svg';
import PostMan from '../../public/icons/postman.svg';
import Gulp from '../../public/icons/gulp.svg';
import Git from '../../public/git.png';
import GitHub from '../../public/code.png';
import BB from '../../public/bb.png';
import SS from '../../public/icons/salesforce-plain.svg';
import Linux from '../../public/linux.png';
import Vardot from '../../public/icons/vardot-logo.webp';
import UNHCR from '../../public/UNHCR.png';
import Storybook from '../../public/icons/storybook-original.svg';
import Slider from "react-slick";

const skills = [
  { src: HTML, alt: 'HTML' },
  { src: CSS, alt: 'CSS' },
  { src: JS, alt: 'JavaScript' },
  { src: Re, alt: 'React' },
  { src: Ex, alt: 'Express' },
  { src: JQuery, alt: 'jQuery' },
  { src: Mongo, alt: 'MongoDB' },
  { src: Sassy, alt: 'Sass' },
  { src: PHP, alt: 'PHP' },
  { src: Laravel, alt: 'Laravel' },
  { src: Drupal, alt: 'Drupal' },
  { src: Node, alt: 'Node.js' },
  { src: BS, alt: 'Bootstrap' },
  { src: TS, alt: 'TypeScript' },
  { src: Git, alt: 'Git' },
  { src: GitHub, alt: 'GitHub' },
  { src: BB, alt: 'Bitbucket' },
  { src: SS, alt: 'StackOverflow' },
  { src: Linux, alt: 'Linux' },
  { src: PostMan, alt: 'Postman' },
  { src: Gulp, alt: 'Gulp' },
  { src: Storybook, alt: 'Storybook' },
];

const Experience = function () {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="experience" className="skills mb-5 mt-5 p-4 bg-white text-primary">
      <h2 className="text-center text-uppercase">Experience</h2>
      <Row>
        <Col md="6">
          <h3 className="fs-6">Development</h3>
          <Row>
            {skills.map((skill, index) => (
              <div key={index} className="col col-3 col-sm-2 pt-2 pb-2 skill-item"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${2 + (index * 0.2)}s`,
                }}>
                <Image src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </Row>
        </Col>
        <Col md="4" className="mx-auto">
          <h3 className="fs-6">Where I worked</h3>
          <div className="vardot-logo" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <Image src={Vardot} />
          </div>

          <p className="experience-instruction p-3 mt-5">
            Click on the company logo for more information
          </p>

          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Vardot</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <Container>
                    <p>slide the projects</p>
                    <Slider {...settings}>
                      <div>
                        <Image src={UNHCR} alt={`slide`} />
                        <h3>UNHCR Donations <span><a className="link-secondary fs-6" href="https://donate.unhcr.org/int/en/general" target="_blank">Link</a></span>
                        </h3>
                        <p>The UNHCR Donations website is a streamlined, globally accessible platform designed to facilitate online contributions to the UNHCR’s humanitarian efforts. the site integrates modern web technologies to ensure a secure, user-friendly, and responsive experience:</p>
                      </div>
                      <div>
                        <Image src={UNHCR} alt={`slide`} />
                        <h3>UNHCR Switzerland <span><a className="link-secondary fs-6" href="https://donate.unrefugees.ch/ch/en-ch/unhcr-donate" target="_blank">Link</a></span>
                        </h3>
                        <p>The UNHCR Switzerland Donation Portal is a highly optimized and localized fundraising platform tailored to donors in Switzerland.</p>
                      </div>
                      <div>
                        <Image src={UNHCR} alt={`slide`} />
                        <h3>UNHCR UI toolkit</h3>
                        <p>The UNHCR UI Toolkit is a cutting-edge Storybook project designed to standardize and accelerate the development of UNHCR’s digital interfaces by providing a comprehensive library of reusable UI components.</p>
                      </div>
                    </Slider>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Experience