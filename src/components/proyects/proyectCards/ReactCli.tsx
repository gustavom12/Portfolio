import React,{} from 'react';
import OnHover from "../onHover";
const ReactCli = ({ inSpanish }: { inSpanish: boolean })=>{
  return(
    <div className="proyect d-flex">
      <div
        className="cardImage mx-auto"
        data-aos="fade-left-mini"
        data-aos-duration="1100"
      >
        <img src="https://i.ibb.co/tq3TtPQ/reactcli.png" alt="" />
        <OnHover
          inSpanish={inSpanish}
          url="https://github.com/gustavom12/ReactCliGenerator"
        />
      </div>
      <div className="text mx-auto">
        <div data-aos="fade-right-mini" data-aos-duration="1100">
          <a
            href="https://github.com/gustavom12/ReactCliGenerator"
            className="fs-1 text-center text-main fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            React File Generator
          </a>
        </div>
        {inSpanish ? (
          <h4
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            React Cli, cliente de terminal generador de componentes, estilos,
            carpetas y custom hooks, automatizando la creación de archivos para ahorrar
            tiempo a la hora de desarrollar aplicaciones.
          </h4>
        ) : (
          <h4
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            React Cli, generator of Components,
            Styles, folders and custom hooks, automating the creation of files to save time.
          </h4>
        )}
        <div className="logos mt-3 ">
          <div className="d-flex justify-content-around">
            <i
              className="fab fa-node logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="200"
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReactCli
