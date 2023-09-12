import React from "react";
import Miniature from "./Miniature";
import "../App.css";

const Footer = ({
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
    <>
      <div className="footer">
        <div className="home">Home</div>
        {activeWindows.map((window, index) => (
          <Miniature
            key={window.id}
            page={window}
            setActiveWindows={setActiveWindows}
            activeWindows={activeWindows}
            index={index}
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
    </>
  );
};
export default Footer;
