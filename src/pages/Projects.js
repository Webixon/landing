import React from 'react'


import Project from './Project';
import {projects} from './InputProjects'



const Projects = () => {   

    const showProjects = projects.map(project => <Project key={project.title} project={project}/>)
    return (
      <>
           {showProjects}
     </>
    )
}

export default Projects;