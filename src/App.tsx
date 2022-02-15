import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Sumary from "./components/Sumary";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App({ data }: any) {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <AboutMe />
      <Sumary data={data} title={"Resumen"} />
      <Skills data={data} title={"Habilidades"} />
      <Projects data={data} title={"Proyectos"} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
