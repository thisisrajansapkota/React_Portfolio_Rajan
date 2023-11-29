import React from "react";
import { images } from "./assets/img/index";
import "./style.scss";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <header className="primary-header" id="home">
        <div className="left">
          <div>
            <h1>Rajan</h1>
          </div>
          <div className="line"></div>
          <div>
            <h1>Web Developer</h1>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-icon">
            <i className="fa-solid fa-bars"></i>
          </label>

          <ul className="navigation">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>

      {/* <!-- Hero --> */}
      <section className="section1" id="hero">
        <div className="hero">
          <div className="left">
            <div className="name">Hi, I am Rajan Sapkota</div>
            <div className="tag">Web Developer</div>
            <div className="sub-tag">I love coding</div>
            <a href={images.projectimg} download>
              <button>
                Download CV
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="right">
            <img src={images.userImg} alt="User" />
          </div>
        </div>
      </section>

      {/* <!-- Banner --> */}
      <section className="section2">
        <div className="info-container">
          <div className="info-lists">
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <h5>Graduate</h5>
              </div>
            </div>
            <div className="divider"></div>

            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <h5>Graduate</h5>
              </div>
            </div>
            <div className="divider"></div>
            <div className="info-content">
              <div className="icon-container">
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h5>IT</h5>
                <h5>Graduate</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- skills --> */}

      <section className="section3" id="skills">
        <div className="skills-container">
          <div>
            <i className="fa-brands fa-html5"></i>
            <div>HTML</div>
          </div>

          <div>
            <i className="fa-brands fa-css3-alt"></i>
            <div>CSS</div>
          </div>
          <div>
            <i className="fa-brands fa-js"></i>
            <div>JavaScript</div>
          </div>
        </div>
      </section>

      {/* <!-- Projects --> */}

      <section className="section4" id="projects">
        <h2 className="title">My Recent Work</h2>
        <div className="project-container">
          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={images.projectImg} alt="Project" width="100%" />
            </div>
            <div className="bottom">
              <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-react"></i>
              </div>
              <p>Portfolio with React</p>
              <p>Nov 1, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About me --> */}

      <section className="section5" id="about">
        <section className="about-me">
          <h2 className="title">About me</h2>
          <div className="about-container">
            <div className="left">
              <img src={images.projectImg} alt="" width="50%" />
            </div>

            <div className="right">
              <h2>Rajan Sapkota</h2>
              <p className="details">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                corporis architecto illum modi rem. Soluta vitae architecto a
                recusandae asperiores! Perspiciatis perferendis reiciendis vel
                pariatur veritatis, necessitatibus quas, dicta accusamus illo,
                similique inventore repudiandae quos laboriosam laudantium vero
                provident libero fugiat maiores odio a facere? Ex cum beatae nam
                quisquam.
              </p>

              <div>
                <div className="tag">
                  <h2>Interests</h2>
                </div>
                <div className="interests">
                  <span>Coding</span>
                  <span>Football</span>
                  <span>Movies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <!-- Get in Touch --> */}
      <section className="section6" id="contact">
        <h2 className="title">Get in Touch</h2>
        <div className="socials">
          <i className="fa-brands fa-linkedin" id="socials-icon"></i>
          <i className="fa-brands fa-facebook" id="socials-icon"></i>
          <i className="fa-brands fa-github" id="socials-icon"></i>
          <i className="fa-brands fa-youtube" id="socials-icon"></i>
        </div>
        <h2>OR</h2>
        <a href="mailto:admin@gmail.com">
          <div className="email-section">
            <div className="email">
              <p>admin@gmail.com</p>
              <div className="send">
                <i className="fa-solid fa-envelope"></i>
              </div>
            </div>
          </div>
        </a>
      </section>
      {/* <!-- Footer --> */}

      <footer>
        <div className="footer-container">
          <div className="links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#github">Github</a>
              </li>
              <li>
                <a href="#x">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          &copy; copyright all reserved. Made by me. ❤️
        </div>
      </footer>

      {/* <!-- floating Icon --> */}
      <a href="#hero">
        <div className="floating">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
