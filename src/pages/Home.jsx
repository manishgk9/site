import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import useScrollSpy from "../utils/ScrollSectionObserver";
import Certifications from "./Certifications";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useScrollSpy(
    ["about", "projects", "skills", "certificates", "contact"],
    setActiveSection
  );

  return (
    <div>
      <div id="about" className="px-6 py-6 min-h-screen">
        <About />
      </div>
      <div id="projects" className="px-6 py-6 min-h-screen">
        <Projects />
      </div>
      <div id="skills" className="px-6 py-6 min-h-screen">
        <Skills />
      </div>
      <div id="certificates" className="px-6 py-6 min-h-screen">
        <Certifications />
      </div>
      <div id="contact" className="px-6 py-6 min-h-screen">
        <Contact />
      </div>
    </div>
  );
}
