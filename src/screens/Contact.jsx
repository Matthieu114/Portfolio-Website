import React, { useState, useRef, useEffect, useMemo } from 'react';
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
  const [required, setRequired] = useState(false);
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const rightCtnRef = useRef(null);
  const leftCtnRef = useRef(null);

  const templateParams = {
    from_name: name,
    subject: subject,
    message: message,
    from_email: mail
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.3
    };
  }, []);

  const clearValues = () => {
    setName('');
    setMail('');
    setSubject('');
    setMessage('');
  };

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
      } else {
        entry.target.classList.remove('fade-up');
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mail.length === 0 || message.length === 0) {
      setRequired(true);
      return;
    }
    try {
      setRequired(false);
      setSending(true);
      emailjs
        .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then(() => {
          setSending(false);
          Swal.fire({ icon: 'success', title: 'Your email has been sent', text: 'Thanks for visiting my website I hope you liked it!' });
          clearValues();
        })
        .catch(() => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
        });
    } catch {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
    }
  };

  useEffect(() => {
    const titleObserver = new IntersectionObserver(callbackFunction, options);
    const title = titleRef.current;

    if (title) titleObserver.observe(title);

    return () => {
      if (title) titleObserver.unobserve(title);
    };
  }, [titleRef.current, options]);

  useEffect(() => {
    const descObserver = new IntersectionObserver(callbackFunction, options);
    const desc = descRef.current;

    if (desc) descObserver.observe(desc);

    return () => {
      if (desc) descObserver.unobserve(desc);
    };
  }, [descRef.current, options]);

  useEffect(() => {
    const rightObserver = new IntersectionObserver(callbackFunction, options);
    const right = rightCtnRef.current;

    if (right) rightObserver.observe(right);

    return () => {
      if (right) rightObserver.unobserve(right);
    };
  }, [rightCtnRef.current, options]);

  useEffect(() => {
    const leftObserver = new IntersectionObserver(callbackFunction, options);
    const left = leftCtnRef.current;

    if (left) leftObserver.observe(left);

    return () => {
      if (left) leftObserver.unobserve(left);
    };
  }, [leftCtnRef.current, options]);

  return (
    <section class='contact-root' id='contact'>
      <div class='title-ctn'>
        <div className='title' ref={titleRef}>
          Get In Touch!
        </div>
        <div className='desc' ref={descRef}>
          I am currently looking for an internship in the software engineering or data science field. You can contact me here.
          <br />
          If you just want to say hi feel free to drop me a message!
        </div>
      </div>
      <div className='contact-outer-ctn'>
        <div class='left-ctn' ref={leftCtnRef}>
          <div className='text-ctn'></div>
          <form action='' className='contact-form' onSubmit={onSubmit}>
            <div class='first-ctn'>
              <div class='input-ctn'>
                <input value={name} type='text' name='name' className='input' onChange={(e) => setName(e.target.value)} />
                <span className='focus-border' />
                <label htmlFor='name' class='animated-label'>
                  Name
                </label>
              </div>
              <div class='input-ctn'>
                <input type='text' name='email' className='input' onChange={(e) => setMail(e.target.value)} value={mail} />
                <label htmlFor='email' class='animated-label'>
                  {!required ? 'Mail' : <span class='required'>Mail is Required</span>}
                </label>
                <span className='focus-border' />
              </div>
            </div>
            <div class='input-ctn'>
              <input type='text' className='input' name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
              <label htmlFor='subject' class='animated-label'>
                Subject
              </label>
              <span className='focus-border' />
            </div>
            <div class='input-ctn'>
              <textarea type='text-area' className='input' rows={6} name='message' onChange={(e) => setMessage(e.target.value)} value={message} />
              <label htmlFor='message' class='animated-label'>
                {!required ? 'Message' : <span class='required'>Message is Required</span>}
              </label>
              <span className='focus-border' />
            </div>
            <button className='submit-btn' type='submit'>
              {sending ? '... Sending' : 'Submit'}
            </button>
          </form>
        </div>
        <div class='right-ctn' ref={rightCtnRef}>
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
              <a href='https://www.linkedin.com/in/matthieu-denis1141/' target='_blank'>
                <img src={linkedin} alt='linkedin' className='socials' />
              </a>
              <a href='https://github.com/Matthieu114' target='_blank'>
                <img src={github} alt='github' className='socials' />
              </a>
              <a href='https://www.instagram.com/matthieu114/' target='_blank'>
                <img src={instagram} alt='instagram' className='socials' />
              </a>
              <a href='https://www.messenger.com/t/5398311623579890/' target='_blank'>
                <img src={msg} alt='messenger' className='socials' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
