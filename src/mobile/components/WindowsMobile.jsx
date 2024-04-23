import React from "react";
import WindowMobile from "./WindowMobile";
import "./styles/WindowsMobile.css";

const WindowsMobile = ({
  isVisible,
  setIsVisible,
  projects,
  appsFoldersList,
  windowName,
  setWindowName,
}) => {
  const displayWindow = isVisible === false ? { display: "none" } : null;

  return (
    <div className="WindowsMobileContainer" style={displayWindow}>
      <WindowMobile
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        projects={projects}
        appsFoldersList={appsFoldersList}
        windowName={windowName}
        setWindowName={setWindowName}
      />
    </div>
  );
};

export default WindowsMobile;
