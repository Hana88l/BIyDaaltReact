import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero";
import Quote from "./Components/Quote";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cursor from "./Components/Cursor";
import ExplodingText from "./Components/ExplodingText";
import ProjectDetail from "./Components/ProjectDetail";
import Footer from "./Components/Footer"; 

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  

  return (
    <Router>
      <div className="relative">
        <div className="noise-overlay" />
        <Cursor />

        <Routes>
          
          <Route
            path="/"
            element={
              <main>
                <ExplodingText />
                <Hero />
                <Quote />
                <Projects />
                <About />
                <Footer /> 
              </main>
            }
          />

          
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <Contact
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;