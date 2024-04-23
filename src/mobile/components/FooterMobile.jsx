import React from "react";
import "../components/styles/FooterMobile.css";
import HomeIcon from "../images/icons/Footer-icons/home-icon.svg";
import ContactIcon from "../images/icons/Footer-icons/contact-icon.svg";
import ProjectsIcon from "../images/icons/Footer-icons/projects-icon.svg";

const FooterMobile = ({
  setIsVisible,
  appsFoldersList,
  windowName,
  setWindowName,
}) => {
  function closeWindow() {
    setIsVisible(false);
  }

  function openWindow(pageId) {
    const app = appsFoldersList.find((app) => app.id === pageId);
    if (app) {
      setIsVisible(true);
      setWindowName(app.name);
    } else {
      console.log("id not found");
    }
  }

  return (
    <div className="FooterMobile-container">
      <button onClick={() => closeWindow()} className="FooterMobile-Button">
        <div className="FooterIcons">
          <div
            className="HomeIcon"
            style={{
              backgroundImage: `url(${HomeIcon})`,
            }}
          ></div>
        </div>
      </button>
      <button
        onClick={() => openWindow("contact")}
        className="FooterMobile-Button"
      >
        <div className="FooterIcons">
          <div
            className="ContactIcon"
            style={{
              backgroundImage: `url(${ContactIcon})`,
            }}
          ></div>
        </div>
      </button>
      <button
        onClick={() => openWindow("projects")}
        className="FooterMobile-Button"
      >
        <div className="FooterIcons">
          <div
            className="ProjectsIcon"
            style={{
              backgroundImage: `url(${ProjectsIcon})`,
            }}
          ></div>
        </div>
      </button>
    </div>
  );
};
export default FooterMobile;
