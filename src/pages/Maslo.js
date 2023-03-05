import React from "react";
import {useParams, Link} from 'react-router-dom'

const Maslo = (props) => {
    const {id} = useParams()
    return ( 
    <>
    <h1>{id}</h1>
    <Link to={'/butterproducts'}>Wróc do listy masełek</Link>
    <Link to={`/butterproducts/${props.name}/choose`} >Kupek?</Link>
    </> );
}
 
export default Maslo;