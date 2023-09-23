import React from "react";

const Miniature = ({
  page,
  activeWindows,
  setActiveWindows,
  zIndex,
  maxZIndex,
  setMaxZIndex,
  isVisible,
}) => {


  function changingWindow() {

    const updatedActiveWindows = [...activeWindows];

    let index = updatedActiveWindows.indexOf(page);

    if (!updatedActiveWindows[index].isVisible) {
      updatedActiveWindows[index].isVisible = true;
      let newZIndex = maxZIndex + 1;
      updatedActiveWindows[index].zIndex = newZIndex;
      setMaxZIndex(newZIndex);

    } else {

      let newZIndex = maxZIndex + 1;
      updatedActiveWindows[index].zIndex = newZIndex;
      setMaxZIndex(newZIndex);
    }
    setActiveWindows(updatedActiveWindows);
  }

// se estiver visivel, o hoverEffect fica aplicado

  return (
    <button onClick={changingWindow} className={ page.zIndex === maxZIndex && page.isVisible ? "miniaturesActivated" : "miniatures" }>
      {page.name}
    </button>
  );
};

export default Miniature;
