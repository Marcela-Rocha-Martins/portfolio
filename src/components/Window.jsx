import React from "react";

function Window({ page, activeWindows, setActiveWindows }) {

  function closeWindow() {

    const clickedWindowstoClose = [...activeWindows];

    let index = clickedWindowstoClose.indexOf(page);

    clickedWindowstoClose.splice(index, 1);

    setActiveWindows(clickedWindowstoClose);
  }

  return (
    <div className="window">
      This is the {page.name} window
      <button onClick={closeWindow}>x</button>
    </div>
  );
}

export default Window;
