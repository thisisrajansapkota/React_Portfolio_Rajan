import React from "react";
import Aboutme from "./components/Aboutme";
import Banner from "./components/Banner";
import Floatingicon from "./components/Floatingicon";
import Footer from "./components/Footer";
import Getintouch from "./components/Getintouch";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./style.scss";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <Header />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Banner --> */}
      <Banner />

      {/* <!-- skills --> */}
      <Skills />

      {/* <!-- Projects --> */}
      <Projects />

      {/* <!-- About me --> */}
      <Aboutme />

      {/* <!-- Get in Touch --> */}
      <Getintouch />
      {/* <!-- Footer --> */}
      <Footer />

      {/* <!-- floating Icon --> */}
      <Floatingicon />
    </div>
  );
}

export default App;
