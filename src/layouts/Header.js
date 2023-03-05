import React from 'react';
import {Routes, Route} from 'react-router-dom'
import '../styles/Header.css'
import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'
import header3 from '../images/header3.jpg'

const Header = () => {

    return ( 
    <>
        <Routes>
            <Route path="/" element={<img src={header1} alt="miasto"/>}/>
            <Route path="/products" element={<img src={header2} alt="miasto"/>}/>
            <Route path="/contact" element={<img src={header3} alt="miasto"/>}/>
            <Route path="/admin" element={<img src={header1} alt="miasto"/>}/>  
            <Route path="*" element={<img src={header1} alt="miasto"/>} />
        </Routes>
    </> );
}
 
export default Header;