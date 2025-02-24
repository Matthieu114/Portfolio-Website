import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2';

import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    from_email: mail,
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.3,
    };
  }, []);

  const clearValues = () => {
    setName('');
    setMail('');
    setSubject('');
    setMessage('');
  };

  const callbackFunction = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
      }
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (mail.length === 0 || message.length === 0) {
      setRequired(true);
      return;
    } else {
      setRequired(false);
    }

    try {
      setSending(true);

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
          setSending(false);
          Swal.fire({
            icon: 'success',
            title: 'Your email has been sent',
            text: 'Thanks for visiting my website I hope you liked it!',
          });
          clearValues();
        })
        .catch(() => {
          setSending(false);
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
          clearValues();
        });
    } catch {
      setSending(false);
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
      clearValues();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    const refs = [titleRef, descRef, rightCtnRef, leftCtnRef];

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [callbackFunction, options]);

  return (
    <section className="contact-root" id="contact">
      <div className="title-ctn">
        <div className="title" ref={titleRef}>
          <span>G</span>
          <span>e</span>
          <span>t</span> <span>I</span>
          <span>n</span> <span>T</span>
          <span>o</span>
          <span>u</span>
          <span>c</span>
          <span>h</span>
          <span>!</span>
        </div>
        <div className="desc" ref={descRef}>
          Looking to collaborate on a project or discuss an opportunity? Let’s connect! <br />
          Reach out via this form or find me on{' '}
          <a href="https://www.linkedin.com/in/matthieu-denis1141/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </div>
      </div>
      <div className="contact-outer-ctn">
        <div className="left-ctn" ref={leftCtnRef}>
          <div className="text-ctn"></div>
          <form action="" className="contact-form" onSubmit={onSubmit}>
            <div className="first-ctn">
              <div className="input-ctn">
                <input
                  value={name}
                  type="text"
                  name="name"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-border" />
                <label htmlFor="name" className="animated-label">
                  Name
                </label>
              </div>
              <div className="input-ctn">
                <input
                  type="text"
                  name="email"
                  className="input"
                  onChange={(e) => setMail(e.target.value)}
                  value={mail}
                />
                <label htmlFor="email" className="animated-label">
                  {!required ? 'Mail' : <span className="required">Mail is Required</span>}
                </label>
                <span className="focus-border" />
              </div>
            </div>
            <div className="input-ctn">
              <input
                type="text"
                className="input"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <label htmlFor="subject" className="animated-label">
                Subject
              </label>
              <span className="focus-border" />
            </div>
            <div className="input-ctn">
              <textarea
                type="text-area"
                className="input"
                rows={6}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <label htmlFor="message" className="animated-label">
                {!required ? 'Message' : <span className="required">Message is Required</span>}
              </label>
              <span className="focus-border" />
            </div>
            <button className="submit-btn" type="submit">
              {sending ? '... Sending' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="right-ctn" ref={rightCtnRef}>
          <div className="info-ctn">
            <div className="icon-ctn">
              <MdLocationPin className="icon" />
              <p>28 rue Diderot, Vincennes, France, 94300</p>
            </div>
            <div className="icon-ctn">
              <BsFillTelephoneFill className="icon" />
              <p>+33 06 58 76 96 53</p>
            </div>
            <div className="icon-ctn">
              <MdEmail className="icon" />
              <p>mdenis300@gmail.com</p>
            </div>
            <hr className="line" />
          </div>
          <div className="socials-outer-ctn">
            <div className="socials-ctn">
              <a href="https://www.linkedin.com/in/matthieu-denis1141/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href="https://github.com/Matthieu114" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://www.instagram.com/matthieu114/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="https://www.messenger.com/t/5398311623579890/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
