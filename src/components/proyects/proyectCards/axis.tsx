import React, { useState } from "react";
// import TextHover from "../../a_miniComponents/texthover/texthover";
import IframeModal from "../../iframeView/iframeModal";
import Carrousel from "../carrouselImgs/carrousel";
import OnHover from "../onHover";
// import VideoPlayer from "../ytVideoPlayer/ytVideoPlayer";
function Axis({ inSpanish }: { inSpanish: boolean }) {
  const [IframeModalDiv, setIframeModalDiv] = useState<any>(null)
  return (
    <div className="proyect d-flex">
      {IframeModalDiv &&
        <IframeModal
          screen={IframeModalDiv}
          removeModal={setIframeModalDiv}
          url="https://axis-eta.vercel.app"
        />}
      <div
        className="cardImage mx-auto flex-column"
        data-aos="fade-left-mini"
        data-aos-duration="1100"
      >
        {/* <div className="icons d-flex justify-content-around w-50 mx-auto">
          <i
            className="fas fa-desktop flex textFather iconButton fs-4"
            onClick={()=>{setIframeModalDiv("hugeScreen")}}
          >
            <TextHover
              message={inSpanish ? "Visualizar en Huge screen" : "Watch in Huge screen"}
              className="fw-bold text-serif"
            />
          </i>
          <i
            className="fas fa-mobile-alt flex textFather iconButton fs-4"
            onClick={()=>{setIframeModalDiv("mobileScreen")}}
            >
            <TextHover message={inSpanish ? "Visualizar en Mobile screen" : "Watch in Mobile screen"} />
          </i>
        </div> */}
        <Carrousel
          imagesUrls={[
            "https://i.ibb.co/6vBvDzR/ax1.png",
            "https://i.ibb.co/KWqTzTy/ax2.png",
            "https://i.ibb.co/0qv6vkN/ax3.png",
            "https://i.ibb.co/HtdRWGV/axis8.png",
            "https://i.ibb.co/GRcNBPq/axis7.png",
            "https://i.ibb.co/MVnvKBr/ax4.png",
            "https://i.ibb.co/wgcP5TV/ax5.png",
            "https://i.ibb.co/bdp2vSz/ax6.png",
          ]}
          delay={3000}
        >
          {/* -------- OnHover -------- */}
          <OnHover
            inSpanish={inSpanish}
            url="https://axis-eta.vercel.app"
          />
        </Carrousel>
      </div>
      <div className="text mx-auto">
        <div
          className="aAnimation"
          data-aos="fade-right-mini"
          data-aos-duration="1100"
        >
          <a
            href="https://axis-eta.vercel.app"
            className="fs-2 text-center text-main fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Axis English School
          </a>
        </div>
        {inSpanish ? (
          <h5
            className="text-serif mt-3"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Axis es una plataforma de un instituto de inglés en el que los
            profesores pueden crear tareas, e inclusive juegos (Quizes) para sus
            alumnos, contando también con un sistema de puntaje y premios, para
            incentivar a los alumnos a completar sus tareas correctamente y a
            tiempo.
            <br />
            <span className="text-secondary fs-6">
              (En estado de desarrollo)
            </span>
          </h5>
        ) : (
          <h5
            className="text-serif mt-2"
            data-aos="fade-right-mini"
            data-aos-duration="1100"
          >
            Axis is a platform of an English institute where teachers can create
            homework and even games for their students. Also has a scoring
            system, to incentivize students to complete their homeworks
            correctly and on time.
            <br />
            <span className="text-secondary fs-6">
              (In state of development)
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
              data-aos="fade-up-mini" data-aos-duration="800" data-aos-delay="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Axis;

// import React, { useEffect } from "react";

// function VideoPlayer({ videoId }: { videoId: String }) {
//   console.log(window.location.pathname)
//   useEffect(() => {
//   }, []);
//   return (
//     <video width="500px" controls height="300px">
//       {/* <source src="/assets/axis.mp4" type="video/mp4" /> */}
//       <source src="/assets/axis.mp4" type="video/mp4" />
//       <source id="mp4" src="" type="video/mp4"></source>
//     </video>
//   )
// }
// export default VideoPlayer;
