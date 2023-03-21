import React, {Component} from 'react'
import { useContext } from 'react'
import {AppContext, defaultObject} from './AppContext'
import Button from './Button'

class ButtonApp extends Component {

    state ={ 
        isLogged: defaultObject.isLogged,
    }

    changeLog = () => {
        this.setState({
            isLogged: !this.state.isLogged
        })       
    }

    render(){
    return(
        <>
        <AppContext.Provider value={
            {
            isLogged:this.state.isLogged,
            changeLog: this.changeLog    
        }} >

        <h1>Użytkownik jest {this.state.isLogged ? "zalogowany": "niezalogowany"}</h1>        
        <Button />        
        </AppContext.Provider>
        </>
    )
}

}


export default ButtonApp;