import React, { useState } from "react";
import "./Experiences.css";

import profilePic from "../../images/profilepic.jpg";
import locationIcon from "../../images/location-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/github-icon.svg";
import downloadIcon from "../../images/download-icon.svg";
import experiencesJson from "../../contentData/experiences.json";

const Experience = () => {
  const [experiences, setExperiences] = useState(experiencesJson);
  const [selectedExperience, setSelectedExperience] = useState("education");
  return (
    <div className="experiencePage">
      <div className="topBannerExperiencePg"></div>

      <div className="leftColumnExperiencePg">
        <div
          className="profilePhotoExperiencePg"
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="name">Marcela Rocha</h1>
        <h3 className="job">Web Developer</h3>

        <div className="locationExperiencePg">
          <div
            className="locationIcon"
            style={{
              backgroundImage: `url(${locationIcon})`,
              backgroundSize: "cover",
            }}
          ></div>
          <p className="locationTxt"> Berlin, Germany</p>
        </div>

        <hr />
        <p align="center" style={{ margin: "0", marginBottom: "20px" }}>
          <img
            src="https://skillicons.dev/icons?i=js,ts,html,css,jquery,bootstrap,tailwind,nodejs,express,vue,git,github,mongodb,firebase,react,nextjs&theme=dark&perline=4"
            alt="technologies icons"
          />
        </p>
        <div className="buttonsExperiencePage">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/marcelarochamartins/")
            }
            className="firstLineLinkedIn"
          >
            <div
              className="linkedinIcon"
              style={{ backgroundImage: `url(${linkedinIcon})` }}
            ></div>
            <div className="linkedinTxt">LinkedIn</div>
          </button>

          <div className="secondLineButtonsExperience">
            <a
              href="/MarcelaRocha-WebDEV.pdf"
              download="MarcelaRocha-WebDEV.pdf"
            >
              <div className="iconsExperiences">
                <div
                  className="downloadGitHub"
                  style={{ backgroundImage: `url(${downloadIcon})` }}
                ></div>
              </div>
            </a>

            <button
              onClick={() =>
                (window.location.href =
                  "https://github.com/Marcela-Rocha-Martins")
              }
              className="iconsExperiences"
            >
              <div
                className="downloadGitHub"
                style={{ backgroundImage: `url(${githubIcon})` }}
              ></div>
            </button>
          </div>
        </div>
      </div>

      <div className="RightColumnExperiencePage">
        <div className="horizontalMenuExperiencePage">
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
                selectedExperience === "education" ? "4px solid #FFF" : "none",
              borderRadius: selectedExperience === "education" ? "2px" : "none",
            }}
            onClick={() => setSelectedExperience("education")}
          >
            education
          </p>
        </div>

        <div className="contentExperiencePage">
          <div className="contentInternalText">
            {selectedExperience === "education" ? (
              <>
                <>
                  {experiences.education.degree.map((education) => (
                    <div className="allContentWork" key={education.id}>
                      <div
                        className="photo"
                        style={{ backgroundImage: `url(${education.photo})` }}
                      ></div>
                      <div className="texts">
                        <div className="resume">
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
                          <p style={{ opacity: "0.6", marginTop: "8px" }}>
                            {education.date}
                          </p>
                        </div>
                        <p>{education.technicalCurriculum}</p>
                        <hr style={{ width: "100%", margin: "2%" }} />
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
                      fontSize: "25px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                    }}
                  >
                    Others
                  </h3>
                  <div className="nonDegree">
                    {experiences.education.nonDegree.map((educationND) => (
                      <div
                        className="allContentWork2"
                        style={{}}
                        key={educationND.id}
                      >
                        <div
                          className="photo"
                          style={{
                            backgroundImage: `url(${educationND.photo})`,
                          }}
                        ></div>
                        <div className="texts">
                          <div className="resume">
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
                  <div className="allContentWork" key={work.id}>
                    <div
                      className="photo"
                      style={{ backgroundImage: `url(${work.photo})` }}
                    ></div>

                    <div className="texts">
                      <div className="resume">
                        <h3>{work.title}</h3>
                        <p>{work.company}</p>
                        <p style={{ opacity: "0.6", marginTop: "8px" }}>
                          {work.date}
                        </p>
                      </div>

                      <div className="jobDescription">
                        {work.description.split("\n").map((item, i) => {
                          return <p key={i}>{item}</p>;
                        })}
                      </div>
                      <hr style={{ width: "100%", margin: "2%" }} />
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

export default Experience;
