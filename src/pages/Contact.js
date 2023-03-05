import React, {Component} from 'react';
import '../styles/Contact.css'
import {usePrompt} from 'react-router-dom'

class Contact extends Component {
    state = {
        value: ''
    }
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value:''
        })
    }
    render() {
        return(
            <>
                <div className='contact'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Napisz do nas!</h3>
                        <textarea value={this.state.value} onChange={this.handleInput} placeholder='wpisz wiadomość'></textarea>
                        <button >Wyślij</button>

                    </form>
                   
                </div>
            </>
        )
    }
}
 
export default Contact;