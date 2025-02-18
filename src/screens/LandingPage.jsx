import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowDownShort } from 'react-icons/bs';

import Lottie from 'lottie-react';
import codingAnimation from '../assets/animations/animOrange.json';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  return (
    <div className='landing-root' id='home'>
      <div className='scroll-down-left-ctn'>
        <span>scroll down !</span>
        <BsArrowDownShort className='down-icon' />
      </div>

      <div className='scroll-down-right-ctn'>
        <span>scroll down !</span>
        <BsArrowDownShort className='down-icon' />
      </div>
      <div className='main-container'>
        <div className={isLoaded ? 'text-container fade active' : 'text-container fade'}>
          <div>
            <h1 className='main-text'>
              <span className='text-hi'>Hi! I'm</span>
              <p className='landing-name'>
                <span>M</span>
                <span>a</span>
                <span>t</span>
                <span>t</span>
                <span>h</span>
                <span>i</span>
                <span>e</span>
                <span>u</span> <span>D</span>
                <span>e</span>
                <span>n</span>
                <span>i</span>
                <span>s</span>
              </p>
            </h1>
            <h2 className='description'>
              <p className='description-text-me'>
                {' '}
                A backend developer who loves solving problems, optimizing performance, and bringing ideas to life — one line
                of code at a time!
              </p>
            </h2>
          </div>
          <div className='buttons-container'>
            <a href='#my-work' className='see-work-btn'>
              Explore My Projects.
            </a>
            <div className='hire-me-btn'>
              <a href='#contact' style={{ display: 'flex', alignItems: 'center' }}>
                <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> Hire me
              </a>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Lottie animationData={codingAnimation} className='landing-page-svg fade-2' />;
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
