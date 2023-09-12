import React from "react";
import Window from "./Window";

const Windows = ({
  activeWindows,
  setActiveWindows,
  zIndex,
  setZIndex,
  minimized,
  setMinimized,
  isVisible,
  setIsVisible,
}) => {
  return (
    <>
      {activeWindows.map((window, index) => (
        <Window
          key={`${window.id}-windows`}
          page={window}
          setActiveWindows={setActiveWindows}
          activeWindows={activeWindows}
          index={index}
          zIndex={zIndex}
          setZIndex={setZIndex}
          minimized={minimized}
          setMinimized={setMinimized}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      ))}
    </>
  );
};

export default Windows;
