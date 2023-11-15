import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
