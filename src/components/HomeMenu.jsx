import React from "react";
import HomeMenuItem from "./HomeMenuItem";

const HomeMenu = ({
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
  page,
}) => {
  return (
    <div className="homeMenu">
      <div className="topStyle"></div>
      <div className="homeMenuWrapper">
      {shortcutList.map((window) => (
        <HomeMenuItem
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
      ))}
      </div>
    </div>
  );
};

export default HomeMenu;
