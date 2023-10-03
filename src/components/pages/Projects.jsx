import React, { useState } from "react";
import "./Projects.css";
import searchIcon from "../../images/search-icon.svg";
import gitHubIcon from "../../images/github-icon2.svg";
import liveIcon from "../../images/live-icon.svg";

function Projects({ zIndex, page, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <div className="projectContainer">
        <div className="leftColumn">
          <div className="searchBar">
            <div className="input"></div>
            <div
              className="square"
              style={{
                backgroundImage: `url(${searchIcon})`,
                backgroundSize: "32px 32px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div className="projectMenuList">
            {projects.map((project) => (
              <div className="menuWrapper">
                <div className="projectPhoto"></div>
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
                  <div className="projectVideo"></div>
                  <div className="projectTechnologies">
                    {selectedProject.details.technologies.map((technology)=> (
                      <div className="technologyTag" key={technology.id}>{technology}</div>
                    ))}
                    </div>
                </div>

                <div className="bottomContent" style={{}}>
                  <div className="bottomTexts">
                  <div className="bottomDetails">
                    <div className="projectTitle">
                      {selectedProject.details.title}
                    </div>
                    <div className="projectDescription">
                      {selectedProject.details.description}
                    </div>
                  </div>
                  </div>
               

                <div className="buttons" style={{display: "flex", flexDirection: "column", gap: "6px", marginTop: "5%"}}>

                  <div className="buttonGitHubLive">
                    <div className="buttonIcon" style={{backgroundImage:`url(${gitHubIcon})`, width: "18px", height: "18px"}}></div>
                    <div className="buttonTitle">GitHub</div>
                  </div>

                  <div className="buttonGitHubLive">
                    <div className="buttonIcon" style={{backgroundImage: `url(${liveIcon})`}}></div>
                    <div className="buttonTitle">Live</div>
                  </div>
                </div>
                </div>
              </>
            ) : (
              <p>Select a project to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
