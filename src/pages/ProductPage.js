import React from 'react';
import Product from '../components/Product'
import {Link, useParams} from 'react-router-dom'



const ProductPage = (props) => {
    let {id} = useParams()
    console.log(id)
    return (

        <>
            <h1>Strona Produktu</h1>
            <Product id={id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </>
      );
}
 
export default ProductPage;