import React from "react";
import contactIcon from "../images/contact-icon.svg";
import experiencesIcon from "../images/experiences-icon.svg";
import whoIcon from "../images/who-icon.svg";
import projectsIcon from "../images/projects-icon.svg";

const Shortcut = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
}) => {
  function openWindow() {
    
    const clickedWindows = [...activeWindows];
    console.log(clickedWindows)

    if(page.name==="Who am I"){
      window.location.href =
      "https://www.linkedin.com/in/marcelarochamartins/";
    }else{
 
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
};


  return (
    <button onClick={openWindow} className="folders-container">
      <div
        className="folder"
        style={{ backgroundImage: `url(${page.name === "Contact" ? contactIcon :
        page.name === "Experiences" ? experiencesIcon :
        page.name === "Who am I" ? whoIcon :
        page.name === "Projects" ? projectsIcon : ""})` }}
      ></div>
      <p className="page-name">{page.name}</p>
    </button>
  );
};

export default Shortcut;
