import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import linkedin from '../assets/linkedin.png';
import msg from '../assets/messenger.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

const Contact = () => {
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
          <form action='' className='contact-form'>
            <div class='first-ctn'>
              <div class='input-ctn'>
                <input type='text' name='name' className='input' />
                <span className='focus-border'></span>
                <label for='name' class='animated-label'>
                  Name
                </label>
              </div>
              <div class='input-ctn'>
                <input type='text' name='email' className='input' />
                <label for='email' class='animated-label'>
                  Mail
                </label>
                <span className='focus-border'></span>
              </div>
            </div>
            <div class='input-ctn'>
              <input type='text' className='input' name='subject' />
              <label for='subject' class='animated-label'>
                Subject
              </label>
              <span className='focus-border'></span>
            </div>
            <div class='input-ctn'>
              <textarea type='text-area' className='input' rows={6} name='message' />
              <label for='message' class='animated-label'>
                Message
              </label>
              <span className='focus-border'></span>
            </div>
            <div className='submit-btn'>Submit</div>
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
