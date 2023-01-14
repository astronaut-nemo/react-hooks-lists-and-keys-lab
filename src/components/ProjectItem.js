import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(`The project ${name} , has the following tech: ${technologies}`)

  const techList = technologies.map((technology, index) => <span key={index}>{technology}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
