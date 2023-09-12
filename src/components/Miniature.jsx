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
    if (updatedActiveWindows[index].isVisible) {
      return {
        ...page,
        isVisible: true,
      };
    } else if (isVisible) {
      let newZIndex = maxZIndex + 4;
      return {
        ...page,
        zIndex: newZIndex,
      };
    }
    setActiveWindows(updatedActiveWindows);
    setIsVisible(true);
  }

//   const updatedActiveWindows = activeWindows.map((window) => {
//     if (!window.isVisible) {
//       return {
//         ...window,
//         isVisible: true,
//       };
//     } else if (isVisible){
//       let newZIndex = maxZIndex + 4;
//       return {
//         ...window,
//         zIndex: newZIndex,
//       };
//     }
//   });

//   setActiveWindows(updatedActiveWindows);
//   setIsVisible(true);
// }

  return (
    <button onClick={changingWindow} className="miniatures">
      {page.name}
    </button>
  );
};

export default Miniature;
