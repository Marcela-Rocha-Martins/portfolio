import React, { useState } from "react";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        
        {
            id: 1,
            name: "Cat x Machine",
            details: {
                title: "Cat x Machine: Vanilla JS Game",
                description: "An endless game using pure javascript, with advanced behaviors, like jump, crounch and so on",
                tecnologies: "CSS, JavaScript, HTML",
                video: "https://www.youtube.com/embed/y0sF5xhGreA?si=uR1ZSRU-HSTciB9g",
            },
        },
        {
            id: 2,
            name: "AnchorNaut",
            details: {
                title: "AnchorNaut",
                description: "A React application with OpenAI API integration",
                tecnologies: "CSS, JavaScript, HTML, React, MongoDB",
                video: "https://www.youtube.com/embed/5_Blq9W9cT8?si=LIzA1dd44bB_jPTY",
            },
        },
    ]

    return (
        <div>
          <h1>Projects Component</h1>
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