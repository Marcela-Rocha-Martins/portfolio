import React, { useEffect } from "react";
//icons
import contactIconMob from "../images/icons/AppsFolder-icons/contact-icon.svg";
import experiencesIconMob from "../images/icons/AppsFolder-icons/experiences-icon.svg";
import whoIconMob from "../images/icons/AppsFolder-icons/who-icon.svg";
import projectsIconMob from "../images/icons/AppsFolder-icons/projects-icon.svg";
import githubIconMob from "../images/icons/AppsFolder-icons/github-icon.svg";
import linkedinIconMob from "../images/icons/AppsFolder-icons/linkedin-icon.svg";

const AppsFolder = ({
  application,
  isVisible,
  setIsVisible,
  windowName,
  setWindowName,
}) => {
  useEffect(() => {
    console.log(windowName);
  }, [windowName]);

  function openWindowApp() {
    if (application.name === "GitHub") {
      window.location.href = "https://github.com/Marcela-Rocha-Martins";
    } else if (application.name === "LinkedIn") {
      window.location.href = "https://www.linkedin.com/in/marcelarochamartins/";
    } else {
      if (isVisible) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setWindowName(application.name);
      }
    }
  }

  return (
    <button
      onClick={() => openWindowApp(application.name)}
      className="AppsFolder"
    >
      <div
        className="Apps-icon"
        style={{
          backgroundImage: `url(${
            application.name === "Projects"
              ? projectsIconMob
              : application.name === "Experiences"
              ? experiencesIconMob
              : application.name === "Who am I"
              ? whoIconMob
              : application.name === "Contact"
              ? contactIconMob
              : application.name === "LinkedIn"
              ? linkedinIconMob
              : application.name === "GitHub"
              ? githubIconMob
              : ""
          })`,
        }}
      ></div>
      <p className="Apps-Name">{application.name}</p>
    </button>
  );
};

export default AppsFolder;
