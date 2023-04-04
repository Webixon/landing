import React from 'react'


import Project from './Project';
import {technologies} from './Technologies';

import toDoImg from'../images/proj1.jpg'

const Projects = () => {
   
    const projects =[
        {
            title:'ToDo List',
            href:'#',
            img:toDoImg,
            description: 'Made a simple ToDoList which shows beginning of my knowledge of JavaScript',
            usedTechnologies:[technologies.html.icon, technologies.css.icon,technologies.js.icon]
        },
        {
            title:'Tytuł 11',
            img:'',
            usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
        },
        {
            title:'Tytuł 111',
            img:'',
            usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
        },
        {
            title:'Tytuł 1111',
            img:'',
            usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
        }
] 
    
    const showProjects = projects.map(project => <Project key={project.title} project={project}/>)
    return (
      <>
           {showProjects}
     </>
    )
}

export default Projects;