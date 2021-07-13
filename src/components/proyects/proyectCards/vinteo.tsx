import React from "react";
import Carrousel from "../carrouselImgs/carrousel";
import OnHover from "../onHover"
function Vinteo({ inSpanish }: { inSpanish: boolean }) {
  return (
    <div className="proyect d-flex" >
      <div
        className="cardImage mx-auto"
        data-aos="fade-left-mini"
        data-aos-duration="1100"
      >
        <Carrousel
          imagesUrls={[
            "https://i.ibb.co/dB5L3t5/vint.png",
            "https://i.ibb.co/h1TqdBN/vint3.png",
            "https://i.ibb.co/2Pn0k9z/vint5.png",
            "https://i.ibb.co/chhCynk/vint2.png",
            "https://i.ibb.co/QX5FWpZ/vint4.png",
          ]}
        >
          <OnHover
            inSpanish={inSpanish}
            url="https://vinteo.vercel.app/"
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
            href="https://vinteo.vercel.app/"
            className="fs-2 text-center text-main fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Vinteo
          </a>
        </div>

        {inSpanish ? (
          <h5
            className="text-serif mt-3"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Vinteo, mi primer trabajo freelance, se trata de una página cuya
            función es promocionar orgánicamente videos de youtube, a traves de
            un sistema de puntos que se ganan al ver videos de otros usuarios o
            pagando con tarjeta.
            <br />
            <span className="text-secondary fs-6">
              (El cliente aún no ha pagado el hosting del sítio)
            </span>
          </h5>
        ) : (
          <h5
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Vinteo, my first freelance job, it is a web which function is
            promote organically youtube videos, through a point system that are
            earned by watching videos of other users or paying for them.
            <br />
            <span className="text-secondary fs-6">
              (Client have not payed for hosting yet)
            </span>
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
export default Vinteo;
