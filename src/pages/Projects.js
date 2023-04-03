import React from 'react'
import Project from './Project';
import {technologies} from './Technologies';


const Projects = () => {
   
    const projects =[
        {
            title:'Tytuł 1',
            img:'',
            usedTechnologies:[technologies.css.name, technologies.html.name]
        },
        {
            title:'Tytuł 11',
            img:'',
            usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
        }
] 
    
    const showProjects = projects.map(project => <Project key={project.title} project={project}/>)
    return (
        <h1>
           {showProjects}
        </h1>
    )
}

export default Projects;