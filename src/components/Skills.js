import React from "react";
import Layout from "./Layout";

function Skills() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Skills;
