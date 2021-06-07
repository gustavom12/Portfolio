import React from "react";
import "./Home.sass";
import Icons from "./icons/icons";
function Home({ inSpanish }: { inSpanish: boolean }) {
  return (
    <section className=" home text-serif" id="Home">
      <h1 data-aos="fade-down" className="d-flex  justify-content-between">
        <div>
          Gustavo Mercado -<span> Web Developer </span>
        </div>
        <Icons />
      </h1>
      {inSpanish ? (
        <>
          <div data-aos="fade">
            <h2>
              ¡Hola! mi nombre es{" "}
              <span className="text-primary fw-bold">Gustavo Mercado</span>, soy
              un desarrollador web Fullstack, enfocado principalmente en el
              front-end. En búsqueda activa de un trabajo que me ayude a
              perfeccionar mis conocimientos.
              {/* <div className="fadingEffect"></div>j */}
            </h2>
          </div>
          <h4
            data-aos="fade"
            className="text-serif2 slide"
            onClick={() => {
              document.getElementById("About")?.scrollIntoView();
            }}
          >
            Desliza para ver más
            <i
              style={{ position: "relative", top: "3px" }}
              className="mx-2 my-auto fas fa-chevron-down"
            ></i>
          </h4>
        </>
      ) : (
        <div>
          <h2>
            ¡Hello! my name is{" "}
            <span className="text-primary fw-bold">Gustavo Mercado</span>, I am
            a Fullstack web developer, mainly focused on the front end, looking
            for a job that could help me to improve my group working and
            experience.
          </h2>
          <h4
            className="text-serif2 slide"
            onClick={() => {
              document.getElementById("About")?.scrollIntoView();
            }}
          >
            Slide to see more
            <i
              style={{ position: "relative", top: "3px" }}
              className="mx-2 my-auto fas fa-chevron-down"
            ></i>
          </h4>
        </div>
      )}
    </section>
  );
}
export default Home;
