import React, { useRef, useState } from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';

const Contact1 = () => {
  const form = useRef();
  const [emailSend, setEmailSend] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vjms4p7', 'template_lunj1dt', form.current, 'xXPrA9aIKQNlNKQtF')
      .then((result) => {
          console.log(emailSend);
          setEmailSend(!emailSend)
          console.log(emailSend);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
      setEmailSend(!emailSend)
  };

  return (
    
    <div className='contactForm'>
      {console.log(emailSend)}
    <span className='contactTitle'>Contact me through this form... </span>
    <form ref={form} onSubmit={sendEmail}>
        <div>
        <label htmlFor='nameInput'>Name: </label>
        <input type="text" name='name' id='nameInput' required/>
        </div>
        <div>
        <label htmlFor='emailInput'>Email: </label>
        <input type="email" name="email" id='emailInput' required/>
        </div>
        <div>
        <label htmlFor='msgInput'>Message: </label>
        <textarea name="msg" id='msgInput' rows="4" cols="33" required/>
        </div>
        <input type="submit" value="Send" id='submitBtn'  />
    </form>
    
    {emailSend && <div className='EmailSent'>Email Sent - Thank You.</div>}
    </div>
  );
};
export default Contact1;