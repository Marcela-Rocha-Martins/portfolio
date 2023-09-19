import React, { useState } from "react";
import Miniature from "./Miniature";
import HomeMenu from "./HomeMenu";
import Clock from "./Clock";
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
  const [isHomeMenu, setIsHomeMenu] = useState(false);

  function openHomeMenu() {
    setIsHomeMenu(!isHomeMenu); 
  }

  return (
    <div className="footer">
      <div className="homeMenuWrapper">
      {isHomeMenu && <HomeMenu />}
      <div className="homeButtonContainer">
      <button onClick={openHomeMenu} className="homeButton">
        Home
      </button>
      </div>
      </div>
      <div className="activeWindows">
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
       <div className="realTime">
        <Clock />
       </div>
    </div>
  );
};


export default Footer;