import React from 'react';

import '../styles/Project.css'

const Project = (props) => {

    const {title, img, usedTechnologies,description,href} = props.project
    // console.log(title, usedTechnologies)
    return(
        <>
        <div className='projectArea'>
           <a className="projectLink" href={href}> 
                <div className='projectBox'>                
                    <span className='projectTitle'>{title}</span>
                    <img className="img" src={img} alt={`image of ${title}`}/>
                    <span className='projectDescription'>{description}</span>
                    <span className='projectTechnologiesIcon'>{usedTechnologies}</span> 
                </div> 
            </a>
        </div>
        </>
    )
}

export default Project;