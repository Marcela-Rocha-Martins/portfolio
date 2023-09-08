import React from "react";

const Shortcut = ({ page, activeWindows, setActiveWindows }) => {

  function openWindow() {

    //function to set the logic behind the window views

    const clickedWindows = [...activeWindows];

    let index = activeWindows.indexOf(page);

    if (index < 0) {

      clickedWindows.push(page);

    } else {

      clickedWindows.splice(index, 1);

      clickedWindows.push(page);
    }

    setActiveWindows(clickedWindows);
    console.log(clickedWindows, "2) clickedWindows com unshift");
  }



  return (
    <button onClick={openWindow} className="folder">
      {page.name}
    </button>
  );
};

export default Shortcut;
