import React, { useRef, useState } from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';

const Contact1 = () => {
  const form = useRef();

  const [emailSend, setEmailSend] = useState(false)
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    msg:''
  })
  const [validation, setValidation] = useState({
    name:false,
    email:false,
    msg:false,
    formCorrect:false
  })

  const validationCheck =() =>{ 
    let regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      if(inputs.name !== ' '){
        setValidation(prevState =>({...prevState, name: true }))
          if(regExp.test(inputs.email)){
            setValidation(prevState =>({...prevState, email: true }))
              if(inputs.msg !==' '){
                setValidation(prevState =>({...prevState, msg: true, formCorrect: true }))
                
              }
          }
      
    }
  } 

  const inputHandler = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value} )
    validationCheck()
  }


  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(validation.formCorrect)
    if(validation.formCorrect){
    emailjs.sendForm('service_vjms4p7', 'template_lunj1dtODTADMNIESKASUJ', form.current, 'xXPrA9aIKQNlNKQtF')
      .then((result) => {

          setEmailSend(!emailSend)

      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
      setEmailSend(!emailSend)
  }};

  return (
    



    <div className='contactForm'>

    <span className='contactTitle'>Contact me through this form... </span>
    <form ref={form} onSubmit={sendEmail}>
        <div>
        <label htmlFor='nameInput'>Name: </label>
        <input type="text" name='name' id='nameInput' onChange={inputHandler} value={inputs.name} />
        </div>
        <div>
        <label htmlFor='emailInput'>Email: </label>
        <input type="email" name="email" id='emailInput' onChange={inputHandler} value={inputs.email} />
        </div>
        <div>
        <label htmlFor='msgInput'>Message: </label>
        <textarea name="msg" id='msgInput' rows="4" cols="33" onChange={inputHandler} value={inputs.msg} />
        </div>
        <input type="submit" value="Send" id='submitBtn'  />
    </form>
    
    {emailSend && <div className='EmailSent'>Email Sent - Thank You.</div>}
    </div>
  );
};
export default Contact1;