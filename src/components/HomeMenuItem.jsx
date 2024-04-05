import React from "react";
import contactIcon from "../images/contact-icon.svg";
import experiencesIcon from "../images/experiences-icon.svg";
import whoIcon from "../images/who-icon.svg";
import projectsIcon from "../images/projects-icon.svg";

const HomeMenuItem = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
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

      if (clickedWindows[i].isVisible === false) {
        clickedWindows[i].isVisible = true;
        let newIndex = maxZIndex + 1;
        clickedWindows[i].zIndex = newIndex;
        setMaxZIndex(newIndex);
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
    <>
      <div className="homeMenuItems">
        <button
          onClick={openWindow}
          className="folderMenu"
          style={{
            backgroundImage: `url(${
              page.name === "Contact"
                ? contactIcon
                : page.name === "Experiences"
                ? experiencesIcon
                : page.name === "Who am I"
                ? whoIcon
                : page.name === "Projects"
                ? projectsIcon
                : ""
            })`,
            backgroundSize: "cover",
            border: "none",
            backgroundColor: "transparent",
            width: "24px",
            height: "24px",
            flexShrink: "0",
            cursor: "pointer",
          }}
        ></button>

        <button onClick={openWindow} className="pageName">
          {page.name}{" "}
        </button>
      </div>
    </>
  );
};

export default HomeMenuItem;
