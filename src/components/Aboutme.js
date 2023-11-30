import React from "react";
import { images } from "../assets/img";
import Layout from "./Layout";

function Aboutme() {
  return (
    <>
      <Layout>
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
                  similique inventore repudiandae quos laboriosam laudantium
                  vero provident libero fugiat maiores odio a facere? Ex cum
                  beatae nam quisquam.
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
      </Layout>
    </>
  );
}

export default Aboutme;
