import React, { useRef, useState } from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';

const Contact1 = () => {
  const [name, setName] = useState('xxxxxxx')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vjms4p7', 'template_lunj1dt', form.current, 'xXPrA9aIKQNlNKQtF')
      .then((result) => {
          console.log(result.text);
          console.log(name)
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
  };

  return (
    <div className='contactForm'>
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
    </div>
  );
};
export default Contact1;