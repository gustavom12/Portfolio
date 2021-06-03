import React from "react";
function TMDB({ inSpanish }: { inSpanish: boolean }) {
  return (
    <div className="proyect d-flex" data-aos="fade" >
      <div className="cardImage mx-auto">
        <img src="https://i.ibb.co/4ZR9rmW/tmdb.png" alt="" />
      </div>
      <div className="text mx-auto">
        <a
          href="https://gustavom12.github.io/TMDB/"
          className="fs-2 text-center text-main fw-bold"
          target="_blank"
          rel="noreferrer"
        >
          The moviedb simulation site
        </a>
        {inSpanish ? (
          <h4 className="text-serif mt-2">
            Simulación de "
            <a href="https://www.themoviedb.org/?language=es">
              The Movie Database
            </a>
            ", fué mi segundo proyecto de práctica, usando Angular como
            framework y la API de "TMDB" en el backend
          </h4>
        ) : (
          <h4 className="text-serif mt-2">
            Simulation of "
            <a href="https://www.themoviedb.org/?language=es">
              The Movie Database
            </a>
            ", it is my second practise proyect, using Angular as
            frontend framework and the API of "TMDB" in the backend
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
  );
}
export default TMDB;
