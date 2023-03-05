import React from "react";
import Butter from './Butter'
import {Routes, Route, useParams} from 'react-router-dom'


const list = ["Kasia", "Rama", "Srama", "Pizdorama", "Margaryna", "MAsło X"]

const ListaMasel = () => {
    const wholeList = list.map(maslo => <Butter key={maslo} name={maslo} type={maslo}/>)

    return ( 
        <>
        {wholeList}

        </>
     );
}
 
export default ListaMasel;