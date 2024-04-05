import React, { useState } from "react";
import "./Projects.css";
import searchIcon from "../../images/search-icon.svg";
import gitHubIcon from "../../images/github-icon2.svg";
import liveIcon from "../../images/live-icon.svg";
import data from "./projectsData.json";

function Projects({ zIndex, page, projects }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

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

  return (
    <div>
      <div className="projectContainer">
        <div className="leftColumn">
          <div className="searchBar">
            <div className="input">
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
              className="square"
              style={{
                backgroundImage: `url(${searchIcon})`,
                backgroundSize: "32px 32px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onClick={handleSearchClick}
            ></div>
          </div>

          <div className="projectMenuList">
            {filteredData.map((project) => (
              <div
                className="menuWrapper"
                onClick={() => {
                  if (project.name === "Code Pen") {
                    window.location.href =
                      "https://codepen.io/Marcela-Rocha-Martins/pens/showcase";
                  } else {
                    setSelectedProject(project);
                  }
                }}
              >
                <div
                  className="projectPhoto"
                  style={{
                    backgroundImage: `url(${project.details.photo})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={selectedProject === project ? "active" : "null"}
                >
                  {project.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rightColumn">
          <div className="project-details">
            {selectedProject ? (
              <>
                <div className="projectVideoWrapper">
                  {selectedProject.details.video ? (
                    <video
                      key={`video_${selectedProject.id}`}
                      className="projectVideo"
                      autoPlay
                      loop
                      muted
                    >
                      <source
                        src={`${window.location.origin}${selectedProject.details.video}`}
                      />
                    </video>
                  ) : null}
                  <div className="projectTechnologies">
                    {selectedProject.details.technologies.map((technology) => (
                      <div className="technologyTag" key={technology.id}>
                        {technology}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bottomContent">
                  <div className="bottomTexts">
                    <div className="bottomDetails">
                      <div className="projectTitle">
                        {selectedProject.details.title}
                      </div>
                      <div
                        className="projectDescription"
                        dangerouslySetInnerHTML={{
                          __html: selectedProject.details.description,
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className="buttons"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      marginTop: "5%",
                      marginLeft: "5%",
                    }}
                  >
                    {selectedProject.details.title === "My Portfolio" ? (
                      <button
                        className="buttonGitHubLive"
                        onClick={() =>
                          (window.location.href =
                            selectedProject.details.github)
                        }
                      >
                        <div
                          className="buttonIcon"
                          style={{
                            backgroundImage: `url(${gitHubIcon})`,
                            width: "18px",
                            height: "18px",
                          }}
                        ></div>
                        <div className="buttonTitle">GitHub</div>
                      </button>
                    ) : (
                      <>
                        <button
                          className="buttonGitHubLive"
                          onClick={() =>
                            (window.location.href =
                              selectedProject.details.github)
                          }
                        >
                          <div
                            className="buttonIcon"
                            style={{
                              backgroundImage: `url(${gitHubIcon})`,
                              width: "18px",
                              height: "18px",
                            }}
                          ></div>
                          <div className="buttonTitle">GitHub</div>
                        </button>

                        <div
                          className="buttonGitHubLive"
                          onClick={() =>
                            (window.location.href =
                              selectedProject.details.live)
                          }
                        >
                          <div
                            className="buttonIcon"
                            style={{ backgroundImage: `url(${liveIcon})` }}
                          ></div>
                          <div className="buttonTitle">Live</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Select a project to view details</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
