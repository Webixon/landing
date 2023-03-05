import React from 'react';
import '../styles/Navigation.css'
import {NavLink} from 'react-router-dom'

const List = [
    {name: "Start", path:"/"},
    {name: "Produkty", path:"/products"},
    {name: "Kontakt", path:"/contact"},
    {name: "Panel Admina", path:"/admin"},
    {name: "Informacja o masełku", path:"/butterproducts"},
    {name: "Lista Rowerów", path:"/bikeList"},
    {name: "Aplikacja włącznik", path:"/hiddenApp"}
]

const Navigation = () => {
    const menu = List.map(item => <li key={item.name}><NavLink to={item.path}>{item.name}</NavLink></li>)
    return ( 
       
       <nav className='main'>
        <ul>
           {menu}
        </ul>
       </nav>
     
     );
}
 
export default Navigation;