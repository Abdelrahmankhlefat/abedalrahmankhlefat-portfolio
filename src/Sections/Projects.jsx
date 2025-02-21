import Image from "next/image";
import { Container } from 'reactstrap';
import CMS from '../../public/projects/cms_page.png';
import CMSAdmin from '../../public/projects/cms_admin.png';
import GCSLogin from '../../public/projects/gcsystem_login.png';
import GCSHome from '../../public/projects/gcsystem_home.png';
import Todo1 from '../../public/projects/todo_first.png';
import Todo2 from '../../public/projects/todo_second.png';
import Chat1 from '../../public/projects/chat_home.png';
import Chat2 from '../../public/projects/chat_register.png';


const Projects = () => {
  return (
    <section id="projects" className="projects bg-success p-4 mt-5 mb-5">
      <h2 className='text-center mb-3 text-uppercase'>Projects</h2>
      <Container>
        <div className="row">
          <div className="col col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body-top">
                  <h4 className="card-title">CMS - Blog post</h4>
                  <p className="card-text">
                    Content management system with admin dashboard to manage content over the website.
                </p>
                </div>
                <div className="card-body-bottom">
                  <div className="project-images">
                    <div className="img-container project-image project-first-image">
                      <Image src={CMS} />
                    </div>
                    <div className="img-container project-image project-second-image">
                      <Image src={CMSAdmin} />
                    </div>
                  </div>
                  <div className="tags">
                    <span className="badge text-bg-secondary">HTML</span>
                    <span className="badge text-bg-secondary">CSS</span>
                    <span className="badge text-bg-secondary">JS</span>
                    <span className="badge text-bg-secondary">JQuery</span>
                    <span className="badge text-bg-secondary">PHP</span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body-top">
                  <h4 className="card-title">Gaming centers management system</h4>
                  <p className="card-text">
                    manage gaming centers sessions, devices, bevarages, and financials.
                    There are two portals, one for manager and one for employees.
                </p>
                </div>
                <div className="card-body-bottom">
                  <div className="project-images">
                    <div className="img-container project-image project-first-image">
                      <Image src={GCSLogin} />
                    </div>
                    <div className="img-container project-image project-second-image">
                      <Image src={GCSHome} />
                    </div>
                  </div>
                  <div className="tags">
                    <span className="badge text-bg-secondary">HTML</span>
                    <span className="badge text-bg-secondary">CSS</span>
                    <span className="badge text-bg-secondary">JS</span>
                    <span className="badge text-bg-secondary">PHP</span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body-top">
                  <h4 className="card-title">Todo app</h4>
                  <p className="card-text">
                    Simple application to track your daily tasks effectively and make sure you catch up with everyone.
                </p>
                </div>
                <div className="card-body-bottom">
                  <div className="project-images">
                    <div className="img-container project-image project-first-image">
                      <Image src={Todo1} />
                    </div>
                    <div className="img-container project-image project-second-image">
                      <Image src={Todo2} />
                    </div>
                  </div>
                  <div className="tags">
                    <span className="badge text-bg-secondary">HTML</span>
                    <span className="badge text-bg-secondary">Ts</span>
                    <span className="badge text-bg-secondary">CSS</span>
                    <span className="badge text-bg-secondary">Snowpack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="card-body-top">
                  <h4 className="card-title">AK ChatServer</h4>
                  <p className="card-text">
                    Chat application that let's you connect with your friends easily via chat.
                </p>
                </div>
                <div className="card-body-bottom">
                  <div className="project-images">
                    <div className="img-container project-image project-first-image">
                      <Image src={Chat1} />
                    </div>
                    <div className="img-container project-image project-second-image">
                      <Image src={Chat2} />
                    </div>
                  </div>
                  <div className="tags">
                    <span className="badge text-bg-secondary">React</span>
                    <span className="badge text-bg-secondary">scss</span>
                    <span className="badge text-bg-secondary">Node</span>
                    <span className="badge text-bg-secondary">Bootstrap</span>
                    <span className="badge text-bg-secondary">Websocket</span>
                    <span className="badge text-bg-secondary">Express</span>
                    <span className="badge text-bg-secondary">Mongo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Projects