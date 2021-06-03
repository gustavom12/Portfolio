import React from "react";
import Axis from "./proyectCards/axis";
import Pokedex from "./proyectCards/pokedex";
import TMDB from "./proyectCards/TMDB";
import Vinteo from "./proyectCards/vinteo";
import "./proyects.sass";
function Proyects({ inSpanish }: { inSpanish: boolean }) {
  return (
    <section className="proyects" style={{position:"relative"}} >
      <h3 className="text-serif text-main fw-bold proyectsTitle" data-aos-offset="0"  data-aos="fade-right">
        {inSpanish ? "Proyectos" : "Proyects"}
      </h3>
      <div
        id="Experience"
        style={{ visibility: "hidden", height:"20vh", position:"absolute", top:"60vh" }}
      />
      <Axis inSpanish={inSpanish}/>
      <Vinteo inSpanish={inSpanish} />
      <TMDB inSpanish={inSpanish} />
      <Pokedex inSpanish={inSpanish} />
    </section>
  );
}
export default Proyects;