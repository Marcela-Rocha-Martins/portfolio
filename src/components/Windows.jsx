import React from "react";
import Window from "./Window";

const Windows = ({ activeWindows, setActiveWindows }) => {
  return (
    <>
      {activeWindows.map((window, index) => (
        <Window
          key={window.id}
          page={window}
          setActiveWindows={setActiveWindows}
          activeWindows={activeWindows}
          index={index}
        />
      ))}
    </>
  );
};

export default Windows;
