import React from "react";


function ProjectItem({ name, about, technologies }) {
  const newTechnologies = technologies.map((tech) =>{
    return<span key={tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{newTechnologies}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
