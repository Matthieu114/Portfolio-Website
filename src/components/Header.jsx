import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  let doc = document.documentElement;
  let w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  const checkScroll = () => {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }
    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    prevScroll = curScroll;
  };

  const toggleHeader = (direction, curScroll) => {
    if (direction === 2 && curScroll > 76) {
      setShowHeader(false);
      prevDirection = direction;
    } else if (direction === 1) {
      setShowHeader(true);
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div class={showHeader ? 'root' : 'hidden'}>
      <div class='header-content'>
        <a class='home-logo' href='#home' onClick={() => navigateTo('/')}>
          MD
        </a>
        <div class='open-header'>
          <GiHamburgerMenu />
        </div>
        <div class='header-links'>
          <a href='#about' class='headerLink' onClick={() => navigateTo('/')}>
            <p class='header-number'> 01. </p>
            About Me
          </a>
          <a class='headerLink' href='#experience' onClick={() => navigateTo('/')}>
            <p class='header-number'> 02. </p>
            Experience
          </a>
          <a class='headerLink' href='#my-work' onClick={() => navigateTo('/')}>
            <p class='header-number'> 03. </p> My Work
          </a>
          <a class='headerLink' onClick={() => navigateTo('/')}>
            <p class='header-number'> 04. </p>
            Contact
          </a>
          <div class='resumeButton'>Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
