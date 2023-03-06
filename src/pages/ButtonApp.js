import React, {Component} from "react";

const ButtonApp = () => {
    const [item, setText] = React.useState('')    
    
    function handleClick () {
        let letter = 'a';
        setText(item + letter)
    }

    return(
        <>
            <button onClick={handleClick}>Dodaj litere A</button>
            <p>{item}</p>
        </>
    )
}

export default ButtonApp;