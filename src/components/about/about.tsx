// import React, { useState } from "react";
// import ModalImage from "../miniComponents/watchCurriculum/modalImage";
import "./about.sass";
function About({ inSpanish }: { inSpanish: boolean }) {
  // const [curriculum, setCurriculum] = useState(false)
  return (
    <section className="about" id="About">
      <h4 className="text-serif text-dark-main fw-bold mb-3" data-aos="fade-right" >
        {inSpanish ? "Trasfondo" : "Details"}
      </h4>
      <div className="d-flex">
        <div className="avatarContainer" data-aos="flip-left-shake" data-aos-delay="0" data-aos-time="0" >
          <img
            src="https://i.ibb.co/bBVXMSM/about.jpg"
            className="avatar"
            alt=""
          />
        </div>
        {inSpanish ? (
          <h5 className="text text-serif font" data-aos="fade-right-mini" data-aos-duration="1200" >
            He trabajado 3 meses de
            manera freelance y un més en
            <a href="http://microweb.link/" target="_blank" rel="noreferrer"> Microweb </a>
            (Startup de desarrollo de software)
            como desarrollador web fullstack principalmente utilizando ReactJS.
            <div />
            Como desarrollador me gustan los desafios que me hacen salir de mi
            zona de confort, ya que aprendo mucho más con ellos. Una de las
            cosas que más disfruto, es la ayuda mútua que proviene de convivir
            con otros programadores.
            <div />
            Mi objetivo como desarrollador es perfeccionar las{" "}
            <span className="text-main cursor-pointer" onClick={() => {
              document.getElementById("Skills")?.scrollIntoView(false)
            }} >
              tecnologías ya aprendidas
            </span>
            , aunque, en menor medida, también disfruto de aprender tecnologías
            nuevas.
            {/* <button className="curriculum" onClick={() => setCurriculum(true)}>
              Ver Curriculum
            </button> */}
          </h5>
        ) : (
          <h5 className="text text-serif font">
            I worked 3 months as a freelancer and 1 month  at
            <a href="http://microweb.link/" target="_blank" rel="noreferrer">Microweb </a>
            (Startup of software development) as a fullstack web developer mainly using ReactJS.
            <div />
            As developer, I like challenges that take me out of my comfort zone,
            as I learn much more with them. One of the things I enjoy the most,
            is the mutual help that comes from being with other programmers.
            <div />
            My goal as a developer is to perfect the
            <span className="text-main cursor-pointer"> technologies I have already learned</span>
            , but I also enjoy learning new technologies.
            {/* <button className="curriculum" onClick={() => setCurriculum(true)} >
              Curriculum
            </button> */}
          </h5>
        )}
        {/* <div className="curriculum">
        Ver
      </div> */}
      </div>
      {/* {curriculum && <ModalImage src={inSpanish ? "https://i.ibb.co/xq7f11v/gustavo-Mercado-1.png" : "https://i.ibb.co/NN3kjHB/gustavo-mercado-1.png"} />} */}
    </section>
  );
}
export default About;
