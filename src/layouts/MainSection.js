import React from "react";

import { Route, Routes } from "react-router-dom";

import AboutMe from '../pages/AboutMe'
import Contact from '../pages/Contact'
import Contact1 from '../pages/Contact1'

const MainSection = () => {
    return(
        <div className="mainSection">
            <Routes>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/contact' element={<Contact1/>}/>
            </Routes>
        </div>
    )
}

export default MainSection;