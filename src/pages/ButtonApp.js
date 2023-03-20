import React, {Component} from 'react'
import { useContext } from 'react'
import {AppContext, defaultObject} from './AppContext'


const ButtonApp = () => {
    const {color} = useContext(AppContext)


    return(
        <>
            <div style={{color:color}}>dupa</div>    
            {console.log(color)}    
        </>
    )
}

export default ButtonApp;