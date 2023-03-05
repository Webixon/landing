import React from "react";
const LoginPage = () => {
    return ( 
        <>
        <div>
            <label htmlFor="name">Login:</label>
            
            <input type='text' id="name"></input>
            <br/>
            <label htmlFor="pass">Password:</label>
            <input type='password' id='pass'></input>
        </div>
        </>
     );
}
 
export default LoginPage;