import React from "react";

const Miniature = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
  isVisible,
  setIsVisible,

}) => {

  function changingWindow() {

   

  }

  return (
    <button onClick={changingWindow} className="miniatures">
      {page.name}
    </button>
  );
};

export default Miniature;
