import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import ProductPage from '../pages/ProductPage';
import ProductsListPage from '../pages/ProductListPage'
import LoginPage from '../pages/LoginPage';
import Maslo from '../pages/Maslo';
import ListaMasel from '../pages/ListaMasel';
import MasloType from '../pages/MasloType';
import BikeList from '../pages/BikeList';
import BikeProduct from '../pages/BikeProduct'
import ButtonApp from '../pages/ButtonApp'

const Page = () => {
    return ( 
        <>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/products' element={<ProductsListPage/>}/>
            <Route path='/products/:id' element={<ProductPage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/butterproducts' element={<ListaMasel/>}/>
            <Route path='/butterproducts/:id' element={<Maslo/>}/>
            <Route path='/butterproducts/:id/choose' element={<MasloType/>}/>
            <Route path="/bikeList" element={<BikeList/>} />
            <Route path="/bikeList/:id" element={<BikeProduct/>} />
            <Route path="/hiddenApp" element={<ButtonApp />} />
            <Route path='*' element={<h1>Nie ma takiego adresu</h1>}/>
        </Routes>
        </>
     );
}
 
export default Page;