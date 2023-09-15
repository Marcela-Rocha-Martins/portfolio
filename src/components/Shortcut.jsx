import React from "react";

const Shortcut = ({
  page,
  activeWindows,
  setActiveWindows,
  maxZIndex,
  setMaxZIndex,
}) => {

  function openWindow() {
    
    const clickedWindows = [...activeWindows];
    
    let equalsId = false;

    for (let i = 0; i < clickedWindows.length; i++) {

      if (clickedWindows[i].id === page.id) {

        equalsId = true;

        let newZIndex = maxZIndex + 1;

        clickedWindows[i].zIndex = newZIndex
        
        setMaxZIndex(newZIndex);

        console.log("zIndex: ", clickedWindows[i].zIndex)
      }
    }
    if (!equalsId === true) {
      
      const newZIndex = maxZIndex + 1;

      setMaxZIndex(newZIndex);

      const updatedPage = { ...page, zIndex: newZIndex, isVisible: true };

      clickedWindows.push(updatedPage);

      // console.log (updatedPage, "updatedPage");
    
    } 
    setActiveWindows(clickedWindows);
  }

  return (
    <button onClick={openWindow} className="folder">
      {page.name}
    </button>
  );
};

export default Shortcut;
