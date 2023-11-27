import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  
  const projectItems = projects.map( project => 
     <li key={project.id}>
      <ProjectItem 
     key={project.id}
     name={project.name}
     about={project.about}
     technologies={project.technologies}
     />
     </li>
    
  )

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ul>
          {/* render ProjectItem components here */}
          {projectItems}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
