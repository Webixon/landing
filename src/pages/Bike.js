import React from "react";
import { Link } from "react-router-dom";

const Bike = (props) => {

    return (
        <>
        <br/>
        <Link to={`/bikeList/${props.name}`} >{props.name}</Link>

        {/* <img src={`${props.pic}`} alt='bike photo' /> */}

        {props.pic!==undefined?<img src={`${props.pic}`} style={{width:"100px"}}/>:<span>Nie mamy zdjęcia produktu</span>}
        </>

      );
}
 
export default Bike;