//This component allow to instantly create new "tile" with new project on site, with instant access to technologies//

import { technologies } from "./InputTechnologies"

import toDoImg from'../images/proj1.jpg'

export const projects = [
    {
        id:1,
        title:'ToDo List',
        href:'#',
        img:toDoImg,
        description: 'Made a simple ToDoList which shows beginning of my knowledge of JavaScript',
        usedTechnologies:[technologies.html.icon, technologies.css.icon,technologies.js.icon]
    },
    {
        id:2,
        title:'Tytuł 11',
        img:'',
        usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
    },
    {
        id:3,
        title:'Tytuł 111',
        img:'',
        usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
    },
    {
        id:4,
        title:'Tytuł 1111',
        img:'',
        usedTechnologies:[technologies.css.name, technologies.html.name, technologies.react.name]
    }
] 