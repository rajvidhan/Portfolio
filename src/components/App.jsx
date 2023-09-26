import React from "react";
import Navbar from "./navbar/Navbar"
import styles from "./navbar/navbar.module.css"
import Hero from "./Hero/Hero"
import About from "./About/About"
import Experience from "./Experience/Experience"
import Project from "./projects/project"
import Contact from "./contact/Contact"
 function App(){
    return <div className={styles.App}>
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Project />
              <Contact />
           </div>
 }
export default App;