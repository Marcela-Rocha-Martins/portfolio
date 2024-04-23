import React, { useState } from "react";
import "./styles/Projects-Mobile.css";
import data from "../../data/projectsData.json";
import ProjectDetailsMobile from "../components/ProjectDetailsMobile";

//--------------------------- icons
import searchIcon from "../../images/search-icon.svg";

const ProjectsPageMob = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [projectActive, setProjectActive] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    filterData(searchTerm);
  };

  const handleInputClick = () => {
    filterData(searchTerm);
  };

  const handleInputFocus = () => {
    filterData(searchTerm);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      filterData(searchTerm);
    }
  };

  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.details.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  };

  function openProject(project) {
    console.log(project, "project", projectActive, "project active?");
    setSelectedProject(project);
    setProjectActive(true);
  }

  function closeProjectDetails() {
    setProjectActive(false);
  }

  return (
    <div>
      <div className="projectContainerMOB" style={{ overflow: "scroll" }}>
        <div className="searchBarMOB">
          <div className="inputMOB">
            <div>
              <input
                type="text"
                placeholder="Search one technology here..."
                value={searchTerm}
                onChange={handleInputChange}
                onClick={handleInputClick}
                onFocus={handleInputFocus}
                onKeyPress={handleEnterPress}
              />
            </div>
          </div>
          <div
            className="squareMOB"
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundSize: "32px 32px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={handleSearchClick}
          ></div>
        </div>

        <div className="projectMenuListMOB" style={{ overflow: "scroll" }}>
          {filteredData.map((project) => (
            <div
              className="menuWrapperMOB"
              onClick={() => {
                if (project.name === "Code Pen") {
                  window.location.href =
                    "https://codepen.io/Marcela-Rocha-Martins/pens/showcase";
                } else {
                  openProject(project);
                }
              }}
            >
              <div
                className="projectPhotoMOB"
                style={{
                  backgroundImage: `url(${project.details.photo})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                key={project.id}
                onClick={() => openProject(project)}
                className={selectedProject === project ? "active" : "null"}
              >
                {project.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {projectActive && (
        console.log("its workinggggg bitch"),
        <ProjectDetailsMobile
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )}
    </div>
  );
};

export default ProjectsPageMob;
