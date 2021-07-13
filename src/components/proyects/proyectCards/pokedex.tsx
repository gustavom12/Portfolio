import React from "react";
import OnHover from "../onHover";
function Pokedex({ inSpanish }: { inSpanish: boolean }) {
  return (
    <div className="proyect d-flex">
      <div
        className="cardImage mx-auto"
        data-aos="fade-left-mini"
        data-aos-duration="1100"
      >
        <img src="https://i.ibb.co/TtbdDLv/poke.png" alt="" />
        <OnHover
            inSpanish={inSpanish}
            url="https://gustavom12.github.io/PokedexSimulation/"
          />
      </div>
      <div className="text mx-auto">
        <div data-aos="fade-right-mini" data-aos-duration="1100">
          <a
            href="https://gustavom12.github.io/PokedexSimulation/"
            className="fs-2 text-center text-main fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Pokedex Simulation
          </a>
        </div>
        {inSpanish ? (
          <h4
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Simulación de "
            <a href="https://www.pokemon.com/el/pokedex/">Pokedex</a>
            ", mi primer proyecto de práctica, utilizando Angular como framework
            front-end y la API de pokemons en el backend
          </h4>
        ) : (
          <h4
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Simulation of "
            <a href="https://www.pokemon.com/el/pokedex/">Pokedex</a>
            ", my first practise proyect, using Angular as front-end framework
            and the pokemon API in the backend
          </h4>
        )}
        <div className="logos mt-3 ">
          <h6
            className="text-main text-serif fw-bold"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            {" "}
            {inSpanish ? "Tecnologías:" : "Tecnologies"}{" "}
          </h6>
          <div className="d-flex justify-content-around">
            <i
              className="fab fa-angular logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="200"
            ></i>
            <i
              className="fab fa-sass logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="500"
            ></i>
            <i
              className="fab fa-bootstrap logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="800"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokedex;
