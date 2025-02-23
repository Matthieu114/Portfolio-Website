import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsArrowDownShort } from 'react-icons/bs';
import Lottie from 'lottie-react';
import codingAnimation from '../../assets/animations/landing-page-anim.json';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  return (
    <div className="landing-root" id="home">
      {/* Left Scroll Indicator */}
      <div className="scroll-indicator scroll-indicator-left">
        <span>scroll down !</span>
        <BsArrowDownShort className="down-icon" />
      </div>

      {/* Right Scroll Indicator */}
      <div className="scroll-indicator scroll-indicator-right">
        <span>scroll down !</span>
        <BsArrowDownShort className="down-icon" />
      </div>

      <div className="main-container">
        <div className={`text-container fade ${isLoaded ? 'active' : ''}`}>
          <div>
            <h1 className="main-heading">
              <span className="text-hi">Hi! I'm</span>
              <p className="landing-name">
                {'Matthieu Denis'.split('').map((char, index) => (
                  <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
                ))}
              </p>
            </h1>
            <h2 className="description">
              <p>
                A backend developer who loves solving problems, optimizing performance, and bringing ideas to life— one
                line of code at a time!
              </p>
            </h2>
          </div>

          <div className="buttons-container">
            <a href="#my-work" className="see-work-btn">
              Explore My Projects.
            </a>
            <div className="hire-me-btn">
              <a href="#contact">
                <AiOutlineSearch className="search-icon" style={{ marginRight: '0.5rem', width: 25, height: 25 }} />
                Hire me
              </a>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Lottie animationData={codingAnimation} className="landing-page-svg fade-2" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
