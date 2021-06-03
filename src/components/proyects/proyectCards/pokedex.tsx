import React,{} from "react";
function Pokedex ({ inSpanish }: { inSpanish: boolean }){
  return(
    <div className="proyect d-flex" data-aos="fade">
      <div className="cardImage mx-auto">
        <img src="https://i.ibb.co/TtbdDLv/poke.png" alt="" />
      </div>
      <div className="text mx-auto">
        <a
          href="https://gustavom12.github.io/PokedexSimulation/"
          className="fs-2 text-center text-main fw-bold"
          target="_blank"
          rel="noreferrer"
        >
          Pokedex Simulation
        </a>
        {inSpanish ? (
          <h4 className="text-serif mt-2">
            Simulación de "
            <a href="https://www.pokemon.com/el/pokedex/">
              Pokedex
            </a>
            ", mi primer proyecto de práctica, utilizando Angular como
            framework front-end y la API de pokemons en el backend
          </h4>
        ) : (
          <h4 className="text-serif mt-2">
            Simulation of "
            <a href="https://www.pokemon.com/el/pokedex/">
              Pokedex
            </a>
            ", my first practise proyect, using Angular as front-end framework
            and the pokemon API in the backend
          </h4>
        )}
        <div className="logos mt-3 ">
        <h6 className="text-main text-serif fw-bold"> {inSpanish ? "Tecnologías:": "Tecnologies"} </h6>
          <div className="d-flex justify-content-around">
            <i className="fab fa-angular logo"></i>
            <i className="fab fa-sass logo"></i>
            <i className="fab fa-bootstrap logo"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pokedex
