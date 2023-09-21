import React from "react";
import Shortcut from "./Shortcut";

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
  shortcutList,
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
          shortcutList={shortcutList}
        />

      ))}
    </div>
  );
};

export default Shortcurts;
