import React from 'react';
import {Navigate} from 'react-router-dom'

const permission = true

const Admin = () => {
    return (
        <>
            {permission?(<h1>Witamy na panelu Admina</h1>):(<Navigate to='/login'  />)}
        </>
      );
}
 
export default Admin;