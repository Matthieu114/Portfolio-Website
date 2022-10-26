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
              <span class='text-hi'>Hi, I am</span>
              <p class='landing-name'>Matthieu Denis</p>
            </h1>
            <h3 class='description'>
              <p class='description-text-me'> I am a student passionate about Web and Game Development.</p>
              Currently, I am in my last year of studies at{' '}
              <a href='https://www.ece.fr/en/program/engineering-degree-bac4-big-data-analytics-major/' class='description-link-ece' target='_blank' rel='noreferrer'>
                ECE paris engineering school
              </a>{' '}
              where I am learning about data science and machine learning.
            </h3>
          </div>
          <div class='buttons-container'>
            <a href='#my-work' class='see-work-btn'>
              See my work
            </a>
            <div class='hire-me-btn'>
              <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> Hire me
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
