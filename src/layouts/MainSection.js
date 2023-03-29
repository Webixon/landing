import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from '../pages/AboutMe'

const MainSection = () => {
    return(
        <div className="mainSection">
            <Routes>
                <Route path='/aboutme' element={<AboutMe/>}/>
            </Routes>
        </div>
    )
}

export default MainSection;