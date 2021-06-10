import React, { useState,useEffect } from 'react';
import About from '../about/about';
import Footer from '../footer/footer';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Proyects from '../proyects/proyects';
import Skills from '../skills/skills';
import './App.sass';
import * as AOS from "aos"
import "aos/dist/aos.css";
import ContactMe from '../contactMe/contactMe';
function App() {
  const [inSpanish, setInSpanish] = useState(true)
  const [theme, setTheme] = useState("dark")
  useEffect(()=>{
    //delete loader after DOM loaded
    document.getElementById("loader")?.remove()
    AOS.init({
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true,
      offset: 25,
      anchorPlacement: 'bottom-bottom'
    })
  },[])
  return (
    <div className="App"
      style={{
        background: theme === "dark" ? "#171c28" : "#fff",
        color: theme === "dark" ? "#fff" : "#171c28",
        transition: "all ease-out 0.4s"
      }}
    >
      <div className="vh100">
        <Home inSpanish={inSpanish}/>
        <Navbar theme={theme} setTheme={setTheme} setInSpanish={setInSpanish} inSpanish={inSpanish} />
      </div>
      <About inSpanish={inSpanish} />
      <Skills inSpanish={inSpanish} />
      <Proyects inSpanish={inSpanish}/>
      <Footer/>
      <ContactMe inSpanish={inSpanish}/>
    </div>
  );
}

export default App;
