import React from "react";
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'
import { useContext } from "react";
import { AppContext, defaultObject } from "./AppContext";


const products = ["car", "bike", "motorcycle"]

const ProductListPage = () => {
    const color = useContext(AppContext)
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/products/${product}`}>{product}</Link>
        </li>
    ))
    console.log(color)
    console.log(defaultObject)
    
    return (    
    <>  
   
        <div className="products">
            <h2 style ={{color:color.color}}>Lista produktów</h2>
            <ul >
            {list}
            </ul>
        </div>
    </> );
}
 
export default ProductListPage;