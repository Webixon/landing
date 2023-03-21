import React, {createContext} from 'react'

export  const defaultObject = {
    isLogged: false,
    changeLog: ()=>{}

}


export const AppContext = createContext() 