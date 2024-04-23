import React, { useState } from "react";
import "./styles/Experiences-Mobile.css";

import profilePic from "../../images/profilepic.jpg";
import locationIcon from "../../images/location-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import downloadIcon from "../../images/download-icon.svg";
import githubIcon from "../../images/github-icon.svg";
import experiencesJson from "../../data/experiences.json";

const ExperiencesPageMob = () => {
  const [experiences, setExperiences] = useState(experiencesJson);
  const [selectedExperience, setSelectedExperience] = useState("education");
  return (
    <div className="ExperiencesMOB-Container">
      <div className="ExperiencesMOB-Container-Header">
        <div className="ExperiencesMOB-Container-Header-Top">
          <div
            className="Container-Header-Top-Pic"
            style={{
              backgroundImage: `url(${profilePic})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div className="Container-Header-Top-Content">
            <h1 className="Container-Header-Top-Content-Name">Marcela Rocha</h1>
            <h3 className="Container-Header-Top-Content-Job">Web Developer</h3>
            <div className="Container-Header-Top-Content-Location">
              <div
                className="locationIcon"
                style={{
                  backgroundImage: `url(${locationIcon})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="locationTxt"> Berlin, Germany</p>
            </div>
          </div>
        </div>

        <div className="ExperiencesMOB-Container-Header-Buttons">
          <div className="Container-Header-Buttons-Left">
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/marcelarochamartins/")
              }
              className="Container-Header-Buttons-Left-Linkedin"
            >
              <div
                className="LKIcon"
                style={{ backgroundImage: `url(${linkedinIcon})` }}
              ></div>
            </button>
            <a
              href="/MarcelaRocha-WebDEV.pdf"
              download="MarcelaRocha-WebDEV.pdf"
            >
              <div className="Container-Header-Buttons-Left-Download">
                <div
                  className="downloadIcon"
                  style={{ backgroundImage: `url(${downloadIcon})` }}
                ></div>
              </div>
            </a>

            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/Marcela-Rocha-Martins")
              }
              className="Container-Header-Buttons-Left-GitHub"
            >
              <div
                className="githubIcon"
                style={{ backgroundImage: `url(${githubIcon})` }}
              ></div>
            </button>
          </div>
          <div className="Container-Header-Buttons-Right">
            <p
              style={{
                borderBottom:
                  selectedExperience === "work" ? "4px solid #FFF" : "none",
                borderRadius: selectedExperience === "work" ? "2px" : "none",
              }}
              onClick={() => setSelectedExperience("work")}
            >
              work
            </p>
            <p
              style={{
                borderBottom:
                  selectedExperience === "education"
                    ? "4px solid #FFF"
                    : "none",
                borderRadius:
                  selectedExperience === "education" ? "2px" : "none",
              }}
              onClick={() => setSelectedExperience("education")}
            >
              education
            </p>
          </div>
        </div>
      </div>
      <div className="ExperiencesMOB-Container-Body">
        <div className="ExperiencesMOB-Container-Body-Icons">
          <p align="center" style={{ margin: "0", marginTop: "24px", marginBottom: "24px" }}>
            <img
              src="https://skillicons.dev/icons?i=js,ts,html,css,tailwind,nodejs,express,vue,git,github,mongodb,firebase,react,nextjs&theme=light&perline=7"
              alt="technologies icons"
              style={{ width: "320px" }}
            />
          </p>
        </div>
        <div className="ExperiencesMOB-Container-Body-Content">
          {" "}
          <div className="contentInternalTextMOB">
            {selectedExperience === "education" ? (
              <>
                <>
                  {experiences.education.degree.map((education) => (
                    <div className="allContentWorkMOB" key={education.id}>
                      <div
                        className="photoMOB"
                        style={{ backgroundImage: `url(${education.photo})` }}
                      ></div>
                      <div className="textsMOB">
                        <div className="resumeMOB">
                          <h3>{education.subject}</h3>
                          <p
                            style={{
                              fontWeight: "600",
                              fontStyle: "normal",
                              lineHeight: "normal",
                            }}
                          >
                            {education.school}
                          </p>
                          <p>{education.type}</p>
                          <p style={{ opacity: "0.6", marginTop: "4px" }}>
                            {education.date}
                          </p>
                        </div>
                        <p style={{fontSize: "12px", marginTop: "12px", marginBottom: "12px"}}>{education.technicalCurriculum}</p>
                        <hr className="hrClass"/>
                      </div>
                    </div>
                  ))}
                </>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      alignSelf: "center",
                      justifyContent: "center",
                      alignContent: "center",
                      color: "#434343",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      margin: "0px",
                      marginBottom: "24px",
                    }}
                  >
                    Others
                  </h3>
                  <div className="nonDegreeMOB">
                    {experiences.education.nonDegree.map((educationND) => (
                      <div
                        className="allContentWork2MOB"
    
                        key={educationND.id}
                      >
                        <div
                          className="photoMOB"
                          style={{
                            backgroundImage: `url(${educationND.photo})`,
                          }}
                        ></div>
                        <div className="textsMOB">
                          <div className="resumeMOB">
                            <p
                              style={{
                                fontWeight: "600",
                                fontStyle: "normal",
                                lineHeight: "normal",
                              }}
                            >
                              {educationND.subject}
                            </p>
                            <p>{educationND.school}</p>
                            <p sytle={{ opacity: "0.6", marginTop: "8px" }}>
                              {educationND.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {experiences.work.map((work) => (
                  <div className="allContentWorkMOB" key={work.id}>
                    <div
                      className="photoMOB"
                      style={{ backgroundImage: `url(${work.photo})` }}
                    ></div>

                    <div className="textsMOB">
                      <div className="resumeMOB">
                        <h3>{work.title}</h3>
                        <p>{work.company}</p>
                        <p style={{ opacity: "0.6", marginTop: "8px" }}>
                          {work.date}
                        </p>
                      </div>

                      <div className="jobDescriptionMOB">
                        {work.description.split("\n").map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                      </div>
                      <hr className="hrClass"/>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPageMob;
