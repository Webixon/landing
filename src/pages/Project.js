import React from 'react';

import '../styles/ProjectBox.css'

const Project = (props) => {

    const {title, img, usedTechnologies} = props.project
    // console.log(title, usedTechnologies)
    return(
        <>
        <div className='projectArea'>
            <div className='projectBox'>
                <span className='projectTitle'>{title}</span>
                <img className="img" src={img} alt='toDoImage'/>
                {usedTechnologies} {/*tu należy stworzyć boxy z odpowiednimi projektami*/}
            </div>
        </div>
        </>
    )
}

export default Project