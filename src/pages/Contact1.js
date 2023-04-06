import React, { useRef, useState, useEffect } from 'react';
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


  const errorMsg = {
    nameError : "Cannot sent empty box",
    emailError : "Email adress is wrong",
    msgError : "Cannot sent empyt box",
    formError : "Please correct the form prior sending"
  }

  const validationCheck =() =>{ 
    let regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    let name = false;
    let email = false;
    let msg = false;
    let formCorrect = false; 

    if(inputs.name !== ''){
      name = true;
    }
    if(regExp.test(inputs.email)){
      email = true;
    }
    if(inputs.msg !== ''){
      msg = true;
    }
    if(name && email && msg){
      formCorrect = true;
    }
    return ({
      name,
      email,
      msg,
      formCorrect
    })
    
    // if(inputs.name !== ''){       
    //     setValidation(prevState =>({...prevState, name: true }))
    //     console.log(validation.name)
    //       if(regExp.test(inputs.email)){
    //         console.log(validation.email)
    //         setValidation(prevState =>({...prevState, email: true }))
    //           if(inputs.msg !==''){
    //             console.log(validation.msg)
    //             setValidation(prevState =>({...prevState, msg: true, formCorrect: true }))                
    //           }
    //       }      
    // }
  } 
  // useEffect (() => validationCheck(),[inputs])
  
  const inputHandler = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value} )    
  }


  const sendEmail = (e) => {
    e.preventDefault();
    const formValidation = validationCheck()
    console.log(formValidation)
    if(formValidation.formCorrect){
    emailjs.sendForm('service_vjms4p7', 'template_lunj1dt', form.current, 'xXPrA9aIKQNlNKQtF')
      .then((result) => {
          setEmailSend(!emailSend)
          setInputs({ 
          name:'',
          email:'',
          msg:''})
          setValidation({
            name:false,
            email:false,
            msg:false,
            formCorrect:false
          })
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
      // setEmailSend(!emailSend)
  }else {
    setValidation({
      name:!formValidation.name,
      email:!formValidation.email,
      msg:!formValidation.msg,
      formCorrect:!formValidation.formCorrect
    })
  }
};

  return (
    



    <div className='contactForm'>

    <span className='contactTitle'>Contact me through this form... </span>
    <form ref={form} onSubmit={sendEmail}>
        <div>
        <label htmlFor='nameInput'>Name: </label>
        <input type="text" name='name' id='nameInput' onChange={inputHandler} value={inputs.name} /> {validation.name && <span>{errorMsg.nameError}</span>}
        </div>
        <div>
        <label htmlFor='emailInput'>Email: </label>
        <input type="email" name="email" id='emailInput' onChange={inputHandler} value={inputs.email} />{validation.email && <span>{errorMsg.emailError}</span>}
        </div>
        <div>
        <label htmlFor='msgInput'>Message: </label>
        <textarea name="msg" id='msgInput' rows="4" cols="33" onChange={inputHandler} value={inputs.msg} />{validation.msg && <span>{errorMsg.msgError}</span>}
        </div>
        <input type="submit" value="Send" id='submitBtn'  />
    </form>
    
    {emailSend && <div className='EmailSent'>Email Sent - Thank You.</div>}
    </div>
  );
};
export default Contact1;