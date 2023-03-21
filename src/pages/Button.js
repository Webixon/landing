import React, {Component} from 'react';
import { AppContext } from './AppContext';

class Button extends Component {
    render () { 
        return (
            <>
            <AppContext.Consumer>
            {
                ({changeLog}) => {                   
                    return(
                        <button onClick={changeLog}>Przełącz użytkownika </button>
                    )
                }
            }            
            </AppContext.Consumer>
            </>
        )
    }
}

export default Button;