import React from "react";

// Esse componente deve ser responsável por mostrar uma lista com os projetos existentes dentro de projects page
const MenuProjects = ({ projects }) => {
  return (
    <div className="menuProjects">
      <ul className="menuProjectsList">
        {projects.map((project) => (
          <li key={project.id} className="projectItemMenu">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuProjects;
