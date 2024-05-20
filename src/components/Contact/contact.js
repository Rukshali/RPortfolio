import React, { useRef } from 'react';
import './contact.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/in.png';
import linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';
//import { useRef } from React;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyfcdn2', 'temlate_7b2x6lr', form.current, '5DBBvMNi_jES5Y1VWLy0S')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact</h1>
            <span className='contactDesc'>Please fill the form to discuss any oppurtunity for me</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your Name' name='your_name'/>
              <input type='email' className='email' placeholder='Your Email ' name='your_email'/>
              <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className='submitBtn'>Submit</button>
              <div className='links'>
                 <a href='https://www.facebook.com/rukshali.rukshali.7?mibextid=ZbWKwL'><img src={facebook} alt='facebook' className='link'/></a>
                 <a href='https://instagram.com/rukshalisahani?igshid=OGQ5ZDc2ODk2ZA=='><img src={instagram} alt='instagram' className='link'/></a>
                 <a href='https://www.linkedin.com/public-profile/settings'><img src={linkedin} alt='linkedin' className='link'/></a>
              </div>
            </form>

        </div>
    </section>
  )
}

export default Contact