import React, { useState } from "react";
import "./Projects.css";
import searchIcon from "../../images/search-icon.svg";

function Projects({ zIndex, page, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <div className="projectContainer">
        <div className="leftColumn" >
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
          <div
            className="projectMenuList"
          >
            <div className="menuDetails">
              {projects.map((project) => (
                <div className="menuWrapper">
                <div className="projectPhoto">
                </div>
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
        </div>

        <div className="rightColumn">
          <div className="project-details">
            <h2>Project Details</h2>
            {selectedProject ? (
              <>
                <div className="projectVideoWrapper">
                  <div className="projectVideo"></div>
                  <div className="projectTechnologies"></div>
                </div>

                <div className="bottomContent">
                  <div className="bottomDetails">
                    <div className="projectTitle"></div>{" "}
                    <div className="projectDescription"></div>{" "}
                  </div>
                </div>

                <div className="buttons"></div>
              </>
            ) : (
              // <div>

              //   <h3>{selectedProject.details.title}</h3>
              //   <div>
              //     <p>{selectedProject.details.description}</p>
              //     {selectedProject.details.video && (
              //       <div>
              //         <p>Video:</p>
              //         <iframe
              //           width="560"
              //           height="315"
              //           src={selectedProject.details.video}
              //           title="Project Video"
              //           frameborder="0"
              //           allowfullscreen
              //         ></iframe>
              //       </div>
              //     )}
              //   </div>
              // </div>
              <p>Select a project to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
