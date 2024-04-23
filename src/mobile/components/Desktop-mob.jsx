import React, { useState } from "react";
//components
import HeaderMobile from "./HeaderMobile";
import FooterMobile from "./FooterMobile";
import AppsContainer from "./AppsContainerMobile";
import WindowsMobile from "./WindowsMobile";
//data
import projects from "../../data/projectsData.json";

const DesktopMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowName, setWindowName] = useState("");

  const appsFoldersList = [
    { name: "Projects", id: "projects" },
    { name: "Who am I", id: "who" },
    { name: "Experiences", id: "experiences" },
    { name: "Contact", id: "contact" },
    { name: "LinkedIn", id: "linkedin" },
    { name: "GitHub", id: "github" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <HeaderMobile />
      <div
        className="DesktopMobile-Container"
        style={{ width: "100%", justifySelf: "start" }}
      >
        <AppsContainer
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          appsFoldersList={appsFoldersList}
          projects={projects}
          windowName={windowName}
          setWindowName={setWindowName}
        />
        <WindowsMobile
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          appsFoldersList={appsFoldersList}
          projects={projects}
          windowName={windowName}
          setWindowName={setWindowName}
        />
      </div>
      <FooterMobile
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        appsFoldersList={appsFoldersList}
        projects={projects}
        windowName={windowName}
        setWindowName={setWindowName}
      />
    </div>
  );
};

export default DesktopMobile;
