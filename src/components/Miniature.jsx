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
// se tiver false(ou seja, hidden), muda para visible
// se tiver true(ou seja, visivel), muda o z-index para o max+1
  }

  return (
    <button onClick={changingWindow} className="miniatures">
      {page.name}
    </button>
  );
};

export default Miniature;
