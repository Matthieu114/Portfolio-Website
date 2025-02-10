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
    <div class='landing-root' id='home'>
      <div class='scroll-down-left-ctn'>
        <span>scroll down !</span>
        <BsArrowDownShort class='down-icon' />
      </div>

      <div class='scroll-down-right-ctn'>
        <span>scroll down !</span>
        <BsArrowDownShort class='down-icon' />
      </div>
      <div class='main-container'>
        <div class={isLoaded ? 'text-container fade active' : 'text-container fade'}>
          <div>
            <h1 class='main-text'>
              <span class='text-hi'>Hi! I'm</span>
              <p class='landing-name'>
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
            <h2 class='description'>
              <p class='description-text-me'> A backend developer who loves solving problems, optimizing performance, and bringing ideas to life — one line of code at a time!</p>
            </h2>
          </div>
          <div class='buttons-container'>
            <a href='#my-work' class='see-work-btn'>
              Explore My Projects.
            </a>
            <div class='hire-me-btn'>
              <a href='#contact' style={{ display: 'flex', alignItems: 'center' }}>
                <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> Hire me
              </a>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Lottie animationData={codingAnimation} class='landing-page-svg fade-2' />;
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
