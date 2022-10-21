import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import linkedin from '../assets/linkedin.png';
import msg from '../assets/messenger.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  // const SERVICE_ID = 'service_2rc40qm';
  // const TEMPLATE_ID = 'template_uhh4c33';
  // const PUBLIC_KEY = 'iVK-XICRK0Jb-W1xt';

  const templateParams = {
    from_name: name,
    subject: subject,
    message: message,
    from_email: mail
  };

  const onSubmit = (e) => {
    console.log(process.env);
    e.preventDefault();
    try {
      emailjs
        .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then(() => {
          Swal.fire({ icon: 'success', title: 'Your email has been sent', text: 'Thanks for visiting my website I hope you liked it!' });
        })
        .catch(() => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
        });
    } catch {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
    }
  };

  return (
    <section class='contact-root'>
      <div class='title-ctn'>
        <div className='title'>Get In Touch!</div>
        <div className='desc'>
          I am currently looking for an internship in the software engineering or data science field. You can contact me here
          <br /> <br />
          Or if you just want to say hi feel free to drop me a message!
        </div>
      </div>
      <div className='contact-outer-ctn'>
        <div class='left-ctn'>
          <div className='text-ctn'></div>
          <form action='' className='contact-form' onSubmit={onSubmit}>
            <div class='first-ctn'>
              <div class='input-ctn'>
                <input value={name} type='text' name='name' className='input' onChange={(e) => setName(e.target.value)} />
                <span className='focus-border'></span>
                <label htmlFor='name' class='animated-label'>
                  Name
                </label>
              </div>
              <div class='input-ctn'>
                <input type='text' name='email' className='input' onChange={(e) => setMail(e.target.value)} value={mail} />
                <label htmlFor='email' class='animated-label'>
                  Mail
                </label>
                <span className='focus-border'></span>
              </div>
            </div>
            <div class='input-ctn'>
              <input type='text' className='input' name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
              <label htmlFor='subject' class='animated-label'>
                Subject
              </label>
              <span className='focus-border'></span>
            </div>
            <div class='input-ctn'>
              <textarea type='text-area' className='input' rows={6} name='message' onChange={(e) => setMessage(e.target.value)} value={message} />
              <label htmlFor='message' class='animated-label'>
                Message
              </label>
              <span className='focus-border'></span>
            </div>
            <button className='submit-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <div class='right-ctn'>
          <div className='info-ctn'>
            <div className='icon-ctn'>
              <MdLocationPin class='icon' />
              <p>25 rue Montrosier, Paris, France, 92200</p>
            </div>
            <div className='icon-ctn'>
              <BsFillTelephoneFill class='icon' />
              <p>+33 06 58 76 96 53</p>
            </div>
            <div className='icon-ctn'>
              <MdEmail class='icon' />
              <p>mdenis300@gmail.com</p>
            </div>
            <hr class='line' />
          </div>
          <div className='socials-outer-ctn'>
            <div className='socials-ctn'>
              <img src={linkedin} alt='linkedin' className='socials' />
              <img src={github} alt='github' className='socials' />
              <img src={instagram} alt='instagram' className='socials' />
              <img src={msg} alt='messenger' className='socials' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
