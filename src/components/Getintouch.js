import React from "react";
import Layout from "./Layout";

function Getintouch() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Getintouch;
