import React from 'react';

const Project = (props) => {
    console.log(props.project)
    const {title, img, usedTechnologies} = props.project
    console.log(title, usedTechnologies)
    return(
        <>
        {title} {usedTechnologies} {/*tu należy stworzyć boxy z odpowiednimi projektami*/}
        </>
    )
}

export default Project