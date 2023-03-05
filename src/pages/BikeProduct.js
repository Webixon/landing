import React from "react";
import {useParams, Link} from 'react-router-dom'

const BikeProduct = (props) => {
    const {id} = useParams()
    return ( 
    <>
    <h1>Nazwa produktu</h1>
    <p>{id}</p>
    <Link to="/bikeList">Wróc do listy rowerów</Link>
    </>
     );
}
 
export default BikeProduct;