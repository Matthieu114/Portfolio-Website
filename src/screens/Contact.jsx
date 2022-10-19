import React from 'react';

const Contact = () => {
  return (
    <section class='contact-root'>
      <div class='left-ctn'>
        <div className='text-ctn'>
          <div className='title'>Contact Me</div>
          <div className='desc'>Currently looking for an internship in the software engineering or data science field feel free to drop me a message!</div>
        </div>
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
      <div class='right-ctn'>hi</div>
    </section>
  );
};

export default Contact;
