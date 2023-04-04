import React from 'react'


import Project from './Project';
import {projects} from './InputProjects'


const Projects = () => {   
    
    const showProjects = projects.map(project => <Project key={project.id} project={project}/>)
    return (
      <>
      {console.log(showProjects)}
           {showProjects}
      </>
    )
}

export default Projects;