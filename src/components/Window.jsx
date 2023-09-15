import React from "react";
import Draggable from "react-draggable";

const Window = ({

  page,
  index,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,

}) => {

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


  if (activeWindows[index].isVisible)
    return (
      <Draggable
        defaultPosition={{
          x: ((30 + 5 * index) * window.innerWidth) / 100,
          y: ((8 + 5 * index) * window.innerHeight) / 100,
        }}
        onStart={handleWindowClick}

        handle=".handle"
      >
        <div
          className="window"
          style={{
            zIndex: page.zIndex,
            visibility: page.isVisible ? "visible" : "hidden",
            maxHeigth: page.innerHeight,
          }}
          onClick={handleWindowClick}
        >
          <div className="handle" style={{ backgroundColor: "red" }}>
            Oi
          </div>
          This is the {page.name} window {index} and the zindex is {page.zIndex}
          <button onClick={closeWindow}>x</button>
          <button onClick={minimizeWindow}>-</button>
        </div>
      </Draggable>
    );
};

export default Window;
