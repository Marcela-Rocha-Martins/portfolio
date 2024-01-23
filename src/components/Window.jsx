/* eslint-disable default-case */
import React, { useState } from "react";

import Draggable from "react-draggable";
import Contact from "./pages/Contact";

import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Who from "./pages/Who";
import closeButton from "../images/closeButton.svg";
import minimizedButton from "../images/minimizedButton.svg";
import maximizedButton from "../images/maximizedButton.svg";

import homeIcon from "../images/home-Icon.svg";
import arrowsLeftRightIcon from "../images/arrowsLeftRight-icon.svg";
import reloadIcon from "../images/reload.svg";
import arrowRight from "../images/arrowRight-icon.svg";

const Window = ({
  page,
  index,
  zIndex,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
  projects,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    top: 80 + 46 * index,
    left: 200 + 46 * index,
  });
  const [isDragging, setIsDragging] = useState(false);

  function closeWindow() {
    const clickedWindowstoClose = [...activeWindows];
    let index = clickedWindowstoClose.indexOf(page);
    clickedWindowstoClose.splice(index, 1);
    setActiveWindows(clickedWindowstoClose);
  }

  function minimizeWindow() {
    const clickedWindowstoMin = [...activeWindows];
    let index = clickedWindowstoMin.indexOf(page);
    clickedWindowstoMin[index].isVisible = false;
    setActiveWindows(clickedWindowstoMin);
  }

  function handleWindowClick() {
    const clickedWindows = [...activeWindows];
    let index = clickedWindows.indexOf(page);
    let newZIndex = maxZIndex + 1;
    clickedWindows[index].zIndex = newZIndex;
    setMaxZIndex(newZIndex);
  }

  function maximizeWindow() {
    setIsMaximized(true);
    if (isMaximized) {
      setIsMaximized(false);
    }
  }

  function handleDrag(e, drag) {
    console.log("drag", drag);
    setPosition({
      top: position.top + drag.deltaY,
      left: position.left + drag.deltaX,
    });
  }

  let pageComponent;

  if (activeWindows[index].isVisible)
    switch (page.name) {
      case "Contact":
        pageComponent = <Contact index={index} zIndex={zIndex} page={page} />;
        break;

      case "Experiences":
        pageComponent = (
          <Experiences index={index} zIndex={zIndex} page={page} />
        );
        break;

      case "Who am I":
        pageComponent = <Who index={index} zIndex={zIndex} page={page} />;
        break;

      case "Projects":
        pageComponent = (
          <Projects
            index={index}
            zIndex={zIndex}
            page={page}
            projects={projects}
          />
        );
    }

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      onStart={handleWindowClick}
      handle=".handle"
    >
      <div
        className="window"
        style={{
          zIndex: page.zIndex,
          visibility: page.isVisible ? "visible" : "hidden",
          maxHeigth: page.innerHeight,
          width: isMaximized ? "100vw" : "960px",
          height: isMaximized ? "100vh" : "600px",
          minWidth: "600px",
          top: isMaximized ? "0" : position.top,
          left: isMaximized ? "0" : position.left,
        }}
        onClick={handleWindowClick}
      >
        <div
          className="handle"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <div className="firstLine">
            <div className="allButtonsFirstLine">
              <button
                className="buttonsHandleWindow"
                onClick={closeWindow}
                style={{
                  backgroundImage: `url(${closeButton})`,
                }}
              ></button>
              <button
                className="buttonsHandleWindow"
                onClick={minimizeWindow}
                style={{
                  backgroundImage: `url(${minimizedButton})`,
                }}
              ></button>
              <button
                className="buttonsHandleWindow"
                onClick={maximizeWindow}
                style={{
                  backgroundImage: `url(${maximizedButton})`,
                }}
              ></button>
            </div>

            <div className="pageNameHandle">{page.name}</div>
          </div>

          {page.name === "Experiences" ? (
            <div className="secondLine">
              <div className="AllbuttonsSecondLine">
                <button
                  className="buttonsHandleWindowSL"
                  style={{
                    backgroundImage: `url(${homeIcon})`,
                  }}
                ></button>
                <button
                  className="buttonsHandleWindowSL"
                  style={{
                    backgroundImage: `url(${arrowsLeftRightIcon})`,
                    width: "78px",
                  }}
                ></button>
                <button
                  className="buttonsHandleWindowSL"
                  style={{
                    backgroundImage: `url(${reloadIcon})`,
                  }}
                ></button>
              </div>

              <div
                className="fakeLink"
                style={{
                  width: "auto",
                }}
              >
                {" "}
                https://www.fakedin.com
              </div>

              <div
                className="buttonsHandleWindowSL"
                style={{
                  backgroundImage: `url(${arrowRight})`,
                  marginRight: "10px",
                }}
              ></div>
            </div>
          ) : null}
        </div>

        {pageComponent && (
          <div
            className="contentWrapper"
            style={{
              flex: "auto",
              overflowY: "auto",
              overflowX: "auto",
            }}
          >
            {pageComponent}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Window;
