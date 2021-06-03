import React from "react";
import Carrousel from "../carrouselImgs/carrousel";
function Vinteo({ inSpanish }: { inSpanish: boolean }) {
  //https://i.ibb.co/chhCynk/vint2.png
  return (
    <div className="proyect d-flex" data-aos="fade">
      <div className="cardImage mx-auto">
        {/* <img src="https://i.ibb.co/dB5L3t5/vint.png" alt="" /> */}
        <Carrousel
          imagesUrls={[
            "https://i.ibb.co/dB5L3t5/vint.png",
            "https://i.ibb.co/h1TqdBN/vint3.png",
            "https://i.ibb.co/2Pn0k9z/vint5.png",
            "https://i.ibb.co/chhCynk/vint2.png",
            "https://i.ibb.co/QX5FWpZ/vint4.png",
          ]}
        />
      </div>
      <div className="text mx-auto">
        <a
          href="https://vinteo.vercel.app/"
          className="fs-2 text-center text-main fw-bold"
          target="_blank"
          rel="noreferrer"
        >
          Vinteo
        </a>
        {inSpanish ? (
          <h5 className="text-serif mt-3">
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
          <h5 className="text-serif mt-2">
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
          <h6 className="text-main text-serif fw-bold">
            {" "}
            {inSpanish ? "Tecnologías:" : "Tecnologies"}{" "}
          </h6>
          <div className="d-flex justify-content-around">
            <i className="logo fab fa-react"></i>
            <i className="logo fab fa-node"></i>
            <i className="fab fa-sass logo"></i>
            <i className="fab fa-bootstrap logo"></i>
            <img
              src="https://i.ibb.co/8b7CdBW/descarga-1.png"
              className="logoimg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vinteo;
