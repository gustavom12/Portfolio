import React from "react";
import MainSkillCircle from "./mainSkillCircle";
import "./skills.sass";
function Skills({ inSpanish }: { inSpanish: boolean }) {
  return (
    <section className="skills d-flex" id="Skills">
      <div className="w-50">
        <h3
          className="text-serif fw-bold text-main text-center"
          data-aos="fade-right"
        >
          {" "}
          Main skills{" "}
        </h3>
        <div
          className=" bg-main mx-auto"
          data-aos-delay="400"
          data-aos="fade-right"
          style={{ height: "4px", width: "15%", borderRadius: "2px" }}
        />
        <div className="mainSkills">
          <div className="d-flex justify-content-around mt-3" >
            <MainSkillCircle percent={80} delay="400">
              <h6 className="text-serif fw-bold">
                <i className="fab fa-js-square mx-1"></i>
                Javascript
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={75} delay="600">
              <h6 className="text-serif fw-bold">
                <i className="logo fab fa-react mx-1"></i>
                ReactJS
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={65} delay="800">
              <h6 className="text-serif fw-bold">
                <i className="fab fa-node-js mx-1"></i>
                NodeJS
              </h6>
            </MainSkillCircle>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <MainSkillCircle percent={80} delay="1000">
              <h6 className="text-serif fw-bold">
                <i className="fab fa-sass mx-1 logo"></i>
                Sass
              </h6>
            </MainSkillCircle>
            <MainSkillCircle percent={70} delay="1100">
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
            <MainSkillCircle percent={65} delay="1300">
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

      <div className="tecnologies w-50">
        <h3
          className="text-serif fw-bold text-main text-center"
          data-aos="fade-left"
        >
          Other Skills
        </h3>
        <div
          className=" bg-main mx-auto"
          data-aos="fade-left"
          data-aos-delay="400"
          style={{ height: "4px", width: "15%", borderRadius: "2px" }}
        />
        <div className="w-100 mt-1">
          <div className="flex">
            <div
              className="english mx-auto flex flex-column"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="300"
            >
              {inSpanish ? (
                <>
                  Inglés
                  <span>(PET exam, pass with merit)</span>
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
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="400"
            >
              ExpressJS
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="550"
            >
              Typescript
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="700"
            >
              Angular
            </span>
          </div>
          <div className="flex">
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="700"
            >
              Redux
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="850"
            >
              Git & Github
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="850"
            >
              Boostrap
            </span>
          </div>
          <div className="flex">
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1050"
            >
              CSS
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1150"
            >
              HTML5
            </span>
            <span
              className="tecnology long text-center mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1250"
            >
              Testing library
            </span>
          </div>
          <div className="flex">
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1150"
            >
              MySQL
            </span>
            <span
              className="tecnology mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1250"
            >
              TypeORM
            </span>
            <span
              className="tecnology long text-center mx-auto d-flex justify-content-around"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="1350"
            >
              PHP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
