import React from "react";

import "./Experiences.css";

import profilePic from "../../images/profilepic.jpg";
import locationIcon from "../../images/location-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/github-icon.svg";
import downloadIcon from "../../images/download-icon.svg";

function Experience() {
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

          <div className="buttonsExperiencePage">

            <button className="firstLineLinkedIn">
              <div
                className="linkedinIcon"
                style={{ backgroundImage: `url(${linkedinIcon})` }}
              ></div>
              <div className="linkedinTxt">LinkedIn</div>
            </button>

            <div className="secondLineButtonsExperience">

                <div className="iconsExperiences">
                    <div
                    className="downloadGitHub"
                    style={{ backgroundImage: `url(${downloadIcon})` }}
                    ></div>
                </div>

                <div className="iconsExperiences">
                <div
                    className="downloadGitHub"
                    style={{ backgroundImage: `url(${githubIcon})` }}
                ></div>
                </div>

            </div>

          </div>
        </div>

        <div className="RightColumnExperiencePage">
          <div className="horizontalMenuExperiencePage"></div>
          <div className="contentExperiencePage"></div>
        </div>

        </div>
  );
}

export default Experience;
