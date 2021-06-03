import React from "react";
import MainSkillCircle from "./mainSkillCircle";
import "./skills.sass";
function Skills({ inSpanish }: { inSpanish: boolean }) {
  return (
    <section className="skills d-flex" id="Skills">
      <div className="w-50" data-aos="fade" data-aos-offset="25">
        <h3 className="text-serif fw-bold text-main text-center">
          {" "}
          Main skills{" "}
        </h3>
        <div
          className=" bg-main mx-auto"
          style={{ height: "4px", width: "15%", borderRadius: "2px" }}
        />
        <div className="mainSkills">
          <div className="d-flex justify-content-around mt-3">
            <MainSkillCircle percent={80}>
              <h6 className="text-serif fw-bold">
                <i className="fab fa-js-square mx-1"></i>
                Javascript
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={75}>
              <h6 className="text-serif fw-bold">
                <i className="logo fab fa-react mx-1"></i>
                ReactJS
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={65}>
              <h6 className="text-serif fw-bold">
                <i className="fab fa-node-js mx-1"></i>
                NodeJS
              </h6>
            </MainSkillCircle>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <MainSkillCircle percent={80}>
              <h6 className="text-serif fw-bold">
                <i className="fab fa-sass mx-1 logo"></i>
                Sass
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={70}>
              <h6 className="text-serif fw-bold">
                <img
                  src="https://i.ibb.co/8b7CdBW/descarga-1.png"
                  className="mx-1"
                  style={{ width: "17px", position: "relative", top: "-2px" }}
                  alt=""
                />
                GraphQL
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={65}>
              <h6 className="text-serif fw-bold">
                <img
                  src="https://i.ibb.co/W0cbTLC/mongo-1.png"
                  alt=""
                  className="mx-1"
                  style={{ width: "17px" }}
                />
                MongoDB
              </h6>
            </MainSkillCircle>
          </div>
        </div>
      </div>

      <div className="tecnologies w-50" data-aos="fade" data-aos-offset="25" >
        <h3 className="text-serif fw-bold text-main text-center">
          Other Skills
        </h3>
        <div
          className=" bg-main mx-auto"
          style={{ height: "4px", width: "15%", borderRadius: "2px" }}
        />
        <div className="w-100 mt-1">
          <div className="flex">
            <div className="english mx-auto flex flex-column">
              {inSpanish ? (
                <>
                  Inglés
                  <span>
                    (PET exam, pass with merit)
                  </span>
                </>
              ) : (
                <>
                  English
                  <span className="mx-1">(PET exam, pass with merit)</span>
                </>
              )}
            </div>
          </div>
          <div className="flex">
            <span className="tecnology mx-auto d-flex justify-content-around">
              ExpressJS
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              Typescript
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              Angular
            </span>
          </div>
          <div className="flex">
            <span className="tecnology mx-auto d-flex justify-content-around">
              Redux
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              Git & Github
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              Boostrap
            </span>
          </div>
          <div className="flex">
            <span className="tecnology mx-auto d-flex justify-content-around">
              CSS
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              HTML5
            </span>
            <span className="tecnology mx-auto d-flex justify-content-around">
              Wordpress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
