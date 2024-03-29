import React from "react";

import { Route, Routes } from "react-router-dom";

import '../styles/MainSection.css'

import AboutMe from '../pages/AboutMe'
import Projects from '../pages/Projects'
import Contact1 from '../pages/Contact1'

const MainSection = () => {
    return(
        <div className="mainSection">
            <Routes>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path='/contact' element={<Contact1/>}/>
            </Routes>
        </div>
    )
}

export default MainSection;