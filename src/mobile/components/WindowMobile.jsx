/* eslint-disable default-case */
import React from "react";
import "./styles/WindowsMobile.css";
//pages
import ExperiencesPageMob from "../pages/Experiences-Mobile";
import ProjectsPageMob from "../pages/Projects-Mobile";
import WhoPageMob from "../pages/Who-Mobile";
import ContactPageMob from "../pages/Contact-Mobile";

const WindowMobile = ({
  isVisible,
  setIsVisible,
  projects,
  appsFoldersList,
  windowName,
  setWindowName,
  application
}) => {

  //logic behind the pages display
  let windowComponent;
  if (windowName === "Contact") {
    windowComponent = (
      <ContactPageMob
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        projects={projects}
        appsFoldersList={appsFoldersList}
        setWindowName={setWindowName}
        application={application}
      />
    );
  } else if (windowName === "Projects") {
    windowComponent = (
      <ProjectsPageMob
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        projects={projects}
        appsFoldersList={appsFoldersList}
        setWindowName={setWindowName}
        application={application}
      />
    );
  } else if (windowName === "Who am I") {
    windowComponent = (
      <WhoPageMob
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        projects={projects}
        appsFoldersList={appsFoldersList}
        setWindowName={setWindowName}
        application={application}
      />
    );
  } else if (windowName === "Experiences") {
    windowComponent = (
      <ExperiencesPageMob
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        projects={projects}
        appsFoldersList={appsFoldersList}
        setWindowName={setWindowName}
      
      />
    );
  }
  return (
    <div className="WindowMobile">
      {windowComponent && (
        <div className="pageComponentWrapper">{windowComponent}</div>
      )}
    
    </div>
  );
};

export default WindowMobile;
