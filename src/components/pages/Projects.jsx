import React, { useState } from "react";

function Projects({zIndex, page, projects}) {
    const [selectedProject, setSelectedProject] = useState(null);

   
    return (
        <div>
          <h1>Projects Component - with my {page.zIndex} index</h1>
          <div className="project-container">
            <div className="project-list">
              <h2>Project List</h2>
              <ul>
                {projects.map((project) => (
                  <li
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={selectedProject === project ? "active" : "null"}
                  >
                    {project.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-details">
              <h2>Project Details</h2>
              {selectedProject ? (
                <div>
                  <h3>{selectedProject.details.title}</h3>
                  <div>
                    <p>{selectedProject.details.description}</p>
                    {selectedProject.details.video && (
                      <div>
                        <p>Video:</p>
                        <iframe
                          width="560"
                          height="315"
                          src={selectedProject.details.video}
                          title="Project Video"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p>Select a project to view details</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default Projects;