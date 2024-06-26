import React, { useState } from "react";
import Miniature from "./Miniature";
import HomeMenu from "./HomeMenu";
import Clock from "./Clock";
import clockIcon from "../images/clock-icon.svg";
import "../";

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
  shortcutList,
  projects,
}) => {
  const [isHomeMenu, setIsHomeMenu] = useState(false);

  function openHomeMenu() {
    setIsHomeMenu(!isHomeMenu);
  }

  return (
    <div className="footer">
      {isHomeMenu && (
        <HomeMenu
          shortcutList={shortcutList}
          page={window}
          setActiveWindows={setActiveWindows}
          activeWindows={activeWindows}
          zIndex={zIndex}
          setZIndex={setZIndex}
          maxZIndex={maxZIndex}
          setMaxZIndex={setMaxZIndex}
          minimized={minimized}
          setMinimized={setMinimized}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          projects={projects}
        />
      )}
      <button onClick={openHomeMenu} className="homeButton">
        Start
      </button>

      <div className="activeWindowsWrapper">
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
      <div className="clockWrapper">
        <div
          className="clockIcon"
          style={{
            backgroundImage: `url(${clockIcon})`,
          }}
        ></div>
        <Clock />
      </div>
    </div>
  );
};

export default Footer;
