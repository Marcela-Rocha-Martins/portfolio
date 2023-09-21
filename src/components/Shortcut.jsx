import React from "react";
import contactIcon from "../images/contact-icon.svg";
import achievementsIcon from "../images/achievements-icon.svg";
import experiencesIcon from "../images/experiences-icon.svg";
import whoIcon from "../images/who-icon.svg";
import projectsIcon from "../images/projects-icon.svg";

const Shortcut = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
  shortcutList,
}) => {
  function openWindow() {
    const clickedWindows = [...activeWindows];

    let equalsId = false;

    for (let i = 0; i < clickedWindows.length; i++) {
      if (clickedWindows[i].id === page.id) {
        equalsId = true;

        let newZIndex = maxZIndex + 1;

        clickedWindows[i].zIndex = newZIndex;

        setMaxZIndex(newZIndex);

        console.log("zIndex: ", clickedWindows[i].zIndex);
      }
    }
    if (!equalsId === true) {
      const newZIndex = maxZIndex + 1;

      setMaxZIndex(newZIndex);

      const updatedPage = { ...page, zIndex: newZIndex, isVisible: true };

      clickedWindows.push(updatedPage);

      // console.log (updatedPage, "updatedPage");
    }
    setActiveWindows(clickedWindows);
  }


  return (
    <button onClick={openWindow} className="folders-container">
      <div
        className="folder"
        style={{ backgroundImage: `url(${page.name === "Contact" ? contactIcon :
        page.name === "Achievements" ? achievementsIcon :
        page.name === "Experiences" ? experiencesIcon :
        page.name === "Who am I" ? whoIcon :
        page.name === "My Projects" ? projectsIcon : ""})` }}
      ></div>
      <p className="page-name">{page.name}</p>
    </button>
  );
};

export default Shortcut;
