import React, { useState } from "react";
import Draggable from "react-draggable";

const Window = ({

  page,
  index,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,

}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({top: 120 + (16 * index) , left:120 + (16 * index) })  

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

  function maximizeWindow(){
    setIsMaximized(true); 

    if (isMaximized) {
      setIsMaximized(false)
    }
  }

  function handleDrag(e, drag) {
    console.log("drag", drag)
    setPosition({
      top: position.top + drag.deltaY,
      left: position.left + drag.deltaX
    })

  }

  if (activeWindows[index].isVisible)
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
            height:  isMaximized ? "100vh" : "600px",
            top: isMaximized ? "0" : position.top,
            left: isMaximized ? "0" : position.left,
          }}
          onClick={handleWindowClick}
        >
          <div className="handle" style={{ backgroundColor: "red" }}>
            Oi
          </div>
          This is the {page.name} window {index} and the zindex is {page.zIndex}
          <button onClick={closeWindow}>x</button>
          <button onClick={minimizeWindow}>-</button>
          <button onClick={maximizeWindow}>[ . ]</button>
        </div>
      </Draggable>
    );
};

export default Window;
