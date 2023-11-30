import React from "react";
import Layout from "./Layout";

function Banner() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default Banner;
