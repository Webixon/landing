import React from 'react';
import {Routes, Route} from 'react-router-dom'

const Maslo = () => {
    return(
        <>
        <h1>masło</h1>
        </>
    )
}

const Footer = () => {
    return ( 
        <>
        <Routes>
            <Route path='/maslo' element={<h1>Masło</h1> }/>

       </Routes>
        </>
     );
}
 
export default Footer;