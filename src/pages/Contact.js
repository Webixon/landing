import React, {useState} from 'react';

import '../styles/Contact.css'


const Contact = () => {
    const [inputs, setInputs] = useState({})
    
    const handlerChange = (e) => {
        const name = e.target.name
        const value = e.target.value 
        setInputs(values => ({...values, [name]: value}))
        
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        console.log({inputs})
        setInputs(values => ({}))
    }
    return (
        <> <div className='contactForm'>
        <span className='contactTitle'>Contact me through this form... </span> {/*zmienić tag*/}
       
        <form onSubmit={handlerSubmit}>
            <div>
            <label htmlFor="nameInput">Name: </label>
            <input name="name"  type="text" id="nameInput" onChange={handlerChange} value={inputs.name ?? ' '}/>
            </div>
            <div>
            <label htmlFor="emailInput">Email: </label>
            <input name="email" type="email" id="emailInput" onChange={handlerChange} value={inputs.email ?? ' '}/>
           </div>
           <div>
            <label htmlFor="msgInput">Message: </label>
            <textarea name="msg" type="textarea" rows="4" cols="33" id="msgInput" onChange={handlerChange} value={inputs.msg ?? ' '}/>
            </div>
            <input id="submitBtn" type="submit" value="Submit"/>
        </form>
       </div>
        </>
    )

}
export default Contact