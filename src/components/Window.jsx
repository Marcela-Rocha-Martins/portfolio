import React, { useState } from "react";
import Draggable from "react-draggable";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Who from "./pages/Who";

const Window = ({
  page,
  index,
  zIndex,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    top: 120 + 16 * index,
    left: 120 + 16 * index,
  });

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
    // const maximizedWindow = [...activeWindows];
    // let index = maximizedWindow.indexOf(page);
    // let newZIndex = maxZIndex + 1;
    // maximizedWindow[index].zIndex = newZIndex;
    // setMaxZIndex(newZIndex);
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
        pageComponent = <Contact index={index} zIndex={zIndex} page={page}/>;
        break;

      case "Achievements":
        pageComponent = <Achievements index={index} zIndex={zIndex} page={page} />;
        break;

      case "Experiences":
        pageComponent = <Experiences index={index} zIndex={zIndex} page={page}/>;
        break;

      case "Who am I":
        pageComponent = <Who index={index} zIndex={zIndex} page={page}/>;
        break;

      case "Projects":
        pageComponent = <Projects index={index} zIndex={zIndex} page={page}/>;
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
          width: isMaximized ? "100vw" : "400px",
          height: isMaximized ? "100vh" : "600px",
          top: isMaximized ? "0" : position.top,
          left: isMaximized ? "0" : position.left,
        }}
        onClick={handleWindowClick}
      >
        <div className="handle" style={{ backgroundColor: "red" }}>
          <button onClick={closeWindow}>x</button>
          <button onClick={minimizeWindow}>-</button>
          <button onClick={maximizeWindow}>[ . ]</button>
        </div>

        {pageComponent && (
          <div
            style={{
              width: "100%",
              height: "97%",
              // maxHeight: "90%", // Define a altura máxima conforme necessário
              overflow: "auto",
              top: "0",
              border: "1px solid red", // Adicione uma barra de rolagem se o conteúdo for muito longo
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
