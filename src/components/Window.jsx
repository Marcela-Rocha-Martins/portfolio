import React from "react";

const Window = ({
  page,
  index,
  activeWindows,
  setActiveWindows,
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

  if (activeWindows[index].isVisible) return (
    <div
      className="window"
      style={{
        top: `${50 + 5 * index}%`,
        left: `${50 + 5 * index}%`,
        zIndex: page.zIndex,
        visibility: page.isVisible ? "visible" : "hidden",
      }}
    >
      This is the {page.name} window {index} and the zindex is {page.zIndex}
      <button onClick={closeWindow}>x</button>
      <button onClick={minimizeWindow}>-</button>
    </div>
  );
};

export default Window;
