import React from "react";
import { images } from "../assets/img";
import Layout from "./Layout";


function Hero() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Hero;
