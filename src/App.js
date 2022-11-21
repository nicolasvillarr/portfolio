import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Proyects from "./components/Proyects";
import ParticlesFondo from "./components/Particles";

function App() {
  return (
    <div>
    <ParticlesFondo/>
      <div><Navbar/></div>
      <div><Title/></div>
      <div id="About"><About/></div>
      <div id="Proyects"><Proyects/></div>
      <div id="Skills"><Skills/></div>
      <div><Contact/></div>
      <div id="Contact"></div>
    </div>
  );
}

export default App;
