import React from "react";

function Window({ page, index, activeWindows, setActiveWindows }) {

  function closeWindow() {

    const clickedWindowstoClose = [...activeWindows];
    let index = clickedWindowstoClose.indexOf(page);
    clickedWindowstoClose.splice(index, 1);
    setActiveWindows(clickedWindowstoClose);
  }

  return (
    <div className="window" style={{top: `${50 + (5 * index)}%`, left: `${50 + (5 * index)}%`}}>
      This is the {page.name} window {index}
      <button onClick={closeWindow}>x</button>
    </div>
  );
}

export default Window;
