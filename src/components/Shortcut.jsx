import React from "react";

const Shortcut = ({ page, activeWindows, setActiveWindows }) => {

  function openWindow() {
    const clickedWindows = [...activeWindows];
    clickedWindows.push(page);
    setActiveWindows(clickedWindows);
  }

  return (
    <button onClick={openWindow} className="folder">
      {page.name}
    </button>
    
  );
};

export default Shortcut;
