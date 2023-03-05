import React from "react";
import {Link} from 'react-router-dom'

const Butter = (props) => {
    return ( 
        <>
        <h1>_</h1>
        <Link to={`/butterproducts/${props.name}`} >{props.name}</Link>
        
        </>

     );
}
 
export default Butter;