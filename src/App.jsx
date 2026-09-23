import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Education from "./components/Education";
import ScrollProgress from "./components/ScrollProgress";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <ScrollProgress />

    <Navbar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}/>

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;