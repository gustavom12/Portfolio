import React from "react";
import "./about.sass";
function About({ inSpanish }: { inSpanish: boolean }) {
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
            Soy un desarrollador web FullStack, enfocado principalmente en
            <span className="text-main"> Front-End</span>. Actualmente me
            encuentro trabajando de manera freelance pero me gustaría encontrar
            un trabajo en relación de dependencia, que me dé más estabilidad y
            me permita trabajar en equipo.
            <div />
            Como desarrollador me gustan los desafios que me hacen salir de mi
            zona de confort, ya que aprendo mucho más con ellos. Una de las
            cosas que más disfruto, es la ayuda mútua que proviene de convivir
            con otros programadores.
            <div />
            Mi objetivo como desarrollador es perfeccionar las{" "}
            <span className="text-main cursor-pointer" onClick={()=>{
              document.getElementById("Skills")?.scrollIntoView(false)
            }} >
              tecnologías ya aprendidas
            </span>
            , aunque, en menor medida, también disfruto de aprender tecnologías
            nuevas.
          </h5>
        ) : (
          <h5 className="text text-serif font">
            I am a FullStack web developer, mainly focused on{" "}
            <span className="text-main">Front-End</span>.
            Currently I'm working as a freelancer, but I would like to find a
            permanent job, that gives me more stability and allows me to work in
            a team.
            <div />
            As developer, I like challenges that take me out of my comfort zone,
            as I learn much more with them. One of the things I enjoy the most,
            is the mutual help that comes from being with other programmers.
            <div />
            My goal as a developer is to perfect the
            <span className="text-main cursor-pointer"> technologies I have already learned</span>
            , but I also enjoy learning new technologies.
          </h5>
        )}
        {/* <div className="curriculum">
        Ver
      </div> */}
      </div>
    </section>
  );
}
export default About;
