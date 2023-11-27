import React from "react";


function ProjectItem({ name, about, technologies }) {
console.log(technologies)
 const technology = technologies.map( (technologies, id)  => {
   <span key={id}>{technologies}</span>
})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
