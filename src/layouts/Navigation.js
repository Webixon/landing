import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navigation.css'



const Navigation = () => {
    const navLinks = [
        {
            name: "About Me", url: "/aboutme"
        },
        {
            name: "Projects", url: "/projects"
        },
        {
            name: "Contact", url: "/contact"
        }
    ]

    const navList = navLinks.map(link => <NavLink key={link.name} to={link.url} className="navElement">{link.name}</NavLink>)

    return(
        <>
        <div className="navigation">
            <ul className="nav">
               {navList}
            </ul>

        </div>
        
        </>
    )
}

export default Navigation