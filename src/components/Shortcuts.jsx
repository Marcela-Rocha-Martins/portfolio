import React from "react";
import Shortcut from "./Shortcut";
import NewComponent from "./NewComponent";

const shortcutList = [
  { name: "My Computer", id: "my-computer" },
  { name: "Contact", id: "contact" },
  { name: "Projects", id: "projects" },
  { name: "Who", id: "who" },
  { name: "Experiences", id: "experiences" },
  { name: "Education", id: "education" },
  { name: "Bin", id: "bin" },
];

const Shortcurts = ({
  activeWindows,
  setActiveWindows,
  zIndex,
  setZIndex,
  maxZIndex,
  setMaxZIndex,
  minimized,
  setMinimized,
  isVisible,
  setIsVisible,


}) => {
  return (
    <div className="wrapper">
      {shortcutList.map((page) => (
        <Shortcut
          key={`${page.id}-shortcuts`}
          page={page}
          activeWindows={activeWindows}
          setActiveWindows={setActiveWindows}
          zIndex={zIndex}
          setZIndex={setZIndex}
          maxZIndex={maxZIndex}
          setMaxZIndex={setMaxZIndex}
          minimized={minimized}
          setMinimized={setMinimized}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />

      ))}
    </div>
  );
};

export default Shortcurts;
