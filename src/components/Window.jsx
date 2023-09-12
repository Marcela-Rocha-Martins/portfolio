import React, { useState } from "react";

const Window = ({
  page,
  index,
  activeWindows,
  setActiveWindows,
  setMinimized,
  setIsVisible,
  
}) => {
  function closeWindow() {
    const clickedWindowstoClose = [...activeWindows];
    let index = clickedWindowstoClose.indexOf(page);
    clickedWindowstoClose.splice(index, 1);
    setActiveWindows(clickedWindowstoClose);
  }

  function minimizeWindow() {
    setMinimized(true);
    setIsVisible(false);
  }

  return (
    <div
      className="window"
      style={{
        top: `${50 + 5 * index}%`,
        left: `${50 + 5 * index}%`,
        zIndex: page.zIndex,
        visibility: page.setIsVisible ? "visible" : "hidden",
      }}
    >
      This is the {page.name} window {index} and the zindex is {page.zIndex}
      <button onClick={closeWindow}>x</button>
      <button onClick={minimizeWindow}>-</button>
    </div>
  );
};

export default Window;
