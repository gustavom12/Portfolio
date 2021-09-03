import React from "react";
import Carrousel from "../carrouselImgs/carrousel";
import OnHover from "../onHover"
function MiCalendario({ inSpanish }: { inSpanish: boolean }) {
  return (
    <div className="proyect d-flex" >
      <div
        className="cardImage mx-auto"
        data-aos="fade-left-mini"
        data-aos-duration="1100"
      >
        <Carrousel
          imagesUrls={[
            "https://i.ibb.co/CPfzjww/calendar1.png",
            "https://i.ibb.co/82VkMpV/calendar2.png",
            "https://i.ibb.co/qNGFw6G/calendar3.png",
            "https://i.ibb.co/61HqjFf/calendar4.png"
          ]}
        >
          <OnHover
            inSpanish={inSpanish}
            url="https://mi-calendario-testing.vercel.app/"
          />
        </Carrousel>
      </div>
      <div className="text mx-auto">
        <div
          className="aContainer"
          data-aos="fade-right-mini"
          data-aos-duration="1100"
        >
          <a
            href="https://mi-calendario-testing.vercel.app/"
            className="fs-2 text-center text-main fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Mi Calendario
          </a>
        </div>

        {inSpanish ? (
          <h5
            className="text-serif mt-3"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Mi Calendario, es una aplicación web de auto administración de turnos
            en la que el admin configura los horarios disponibles, los tipos de turnos, etc.
            Los turnos disponibles se muestran en función del día y los turnos ya dados dicho día
          </h5>
        ) : (
          <h5
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Mi Calendario, is a self-management web application, where the admin can
            configurate the available turns, types of turns, etc.
            Available turns are shown depending on the day and the given turns in that day.
          </h5>
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
              className="logo fab fa-react"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="200"
            ></i>
            <i
              className="logo fab fa-node"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="400"
            ></i>
            <i
              className="fab fa-sass logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="600"
            ></i>
            <i
              className="fab fa-bootstrap logo"
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="800"
            ></i>
            <img
              src="https://i.ibb.co/8b7CdBW/descarga-1.png"
              className="logoimg"
              alt=""
              data-aos="fade-up-mini"
              data-aos-duration="800"
              data-aos-delay="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MiCalendario;
