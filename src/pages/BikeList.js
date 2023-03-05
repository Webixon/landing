import React from "react";
import Bike from "./Bike";

const list = [
    {name:"Bmx",
     pic:"https://i.ebayimg.com/images/g/cb4AAOSw01VeV3Ff/s-l1600.jpg"
}, 
{name:"Górski"},
{name: "Szosowy"}]


const BikeList = () => {


    const bikeList = list.map(bike => <Bike key={bike} name={bike.name} pic={bike.pic}/>)
  console.log(bikeList)
    return (     
    <>
    <h1>
        {bikeList}
    </h1>
    
    </> );
}
 
export default BikeList;