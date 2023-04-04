import React from 'react';

import '../styles/Project.css'

const Project = (props) => {

    const {title, img, usedTechnologies,description} = props.project
    // console.log(title, usedTechnologies)
    return(
        <>
        <div className='projectArea'>
            <div className='projectBox'>
                <span className='projectTitle'>{title}</span>
                <img className="img" src={img} alt='toDoImage'/>
                <span className='projectDescription'>{description}</span>
                <span className='projectTechnologiesIcon'>{usedTechnologies}</span> {/*tu należy stworzyć boxy z odpowiednimi projektami*/}
            </div>
        </div>
        </>
    )
}

export default Project