import React from "react";
import Axis from "./proyectCards/axis";
import MiCalendario from "./proyectCards/miCalendario";
import Pokedex from "./proyectCards/pokedex";
import ReactCli from "./proyectCards/ReactCli";
import TMDB from "./proyectCards/TMDB";
import Vinteo from "./proyectCards/vinteo";
import "./proyects.sass";
function Proyects({ inSpanish }: { inSpanish: boolean }) {
  return (
    <section className="proyects" style={{position:"relative"}} >
      <h3 className="text-serif text-main fw-bold proyectsTitle" data-aos-offset="0"  data-aos="fade-right">
        {inSpanish ? "Proyectos propios" : "My Projects"}
      </h3>
      <div
        id="Experience"
        style={{ visibility: "hidden", height:"20vh", position:"absolute", top:"60vh" }}
      />
      <Axis inSpanish={inSpanish}/>
      <MiCalendario inSpanish={inSpanish} />
      <ReactCli inSpanish={inSpanish} />
      <Vinteo inSpanish={inSpanish} />
      <TMDB inSpanish={inSpanish} />
      <Pokedex inSpanish={inSpanish} />
    </section>
  );
}
export default Proyects;
