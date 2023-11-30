import React from "react";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { Route, Routes } from "react-router-dom";
import "./style.scss";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<Aboutme />}></Route>
        <Route path="/contact" element={<Getintouch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
