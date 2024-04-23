import React from "react";
import AppsFolder from "../components/AppsFolderMobile";
import "./styles/Apps.css";

const AppsContainer = ({
  isVisible,
  setIsVisible,
  setMaxZIndex,
  appsFoldersList,
  projects,
  windowName,
  setWindowName,
}) => {
  return (
    <div
      className="AppsContainer-wrapper"
    >
      {appsFoldersList.map((application) => (
        <AppsFolder
          key={`${application.id}-apps`}
          application={application}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setMaxZIndex={setMaxZIndex}
          appsFoldersList={appsFoldersList}
          projects={projects}
          windowName={windowName}
          setWindowName={setWindowName}
        />
      ))}
    </div>
  );
};

export default AppsContainer;
