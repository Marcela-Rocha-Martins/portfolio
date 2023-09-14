import React from "react";

const Miniature = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  index,
  setMaxZIndex,
  isVisible,
  setIsVisible,
}) => {

  function changingWindow() {

    const updatedActiveWindows = [...activeWindows];

    let index = updatedActiveWindows.indexOf(page);

    if (!updatedActiveWindows[index].isVisible) {
      updatedActiveWindows[index].isVisible = true;

    } else {

      let newZIndex = maxZIndex + 1;
      updatedActiveWindows[index].zIndex = newZIndex;
      setMaxZIndex(newZIndex);

    }
    setActiveWindows(updatedActiveWindows);
  }


  return (
    <button onClick={changingWindow} className="miniatures">
      {page.name}
    </button>
  );
};

export default Miniature;
