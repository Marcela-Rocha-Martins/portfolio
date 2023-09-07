import React from "react";
import Window from "./Window";

const Windows = ({ activeWindows, setActiveWindows }) => {
  return (
    <>
      {activeWindows.map((window) => (
        <Window
          key={window.id}
          page={window}
          setActiveWindows={setActiveWindows}
          activeWindows={activeWindows}
        />
      ))}
    </>
  );
};

export default Windows;
