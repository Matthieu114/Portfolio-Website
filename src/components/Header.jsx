import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import colors from '../config/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();
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

  const openNav = () => {
    document.getElementById('mobile-navbar').style.transform = 'translateX(0vw)';
    document.getElementById('body').style.overflow = 'hidden';
    document.getElementById('mobile-navbar').style.visibility = 'visible';
    setMobileOpen(true);
  };

  const closeNav = () => {
    setMobileOpen(false);
    document.getElementById('mobile-navbar').style.visibility = 'hidden';
    document.getElementById('mobile-navbar').style.transform = 'translateX(100vw)';
    document.getElementById('body').style.overflow = 'scroll';
  };

  return (
    <div class={showHeader ? 'header-root' : 'header-hidden'}>
      <div class='header-content'>
        <a class='home-logo' href='#home' onClick={() => navigateTo('/')}>
          MD
        </a>
        <div class='header-links'>
          <a href='#about' class='header-link' onClick={() => navigateTo('/')}>
            <p class='header-number'> 01. </p>
            About Me
          </a>
          <a class='header-link' href='#my-work' onClick={() => navigateTo('/')}>
            <p class='header-number'> 02. </p> My Work
          </a>
          <a class='header-link' href='#experience' onClick={() => navigateTo('/')}>
            <p class='header-number'> 03. </p>
            Experience
          </a>
          <a class='header-link' onClick={() => navigateTo('/')} href='#contact'>
            <p class='header-number'> 04. </p>
            Contact
          </a>
          <Link class='resume-button' to='/resume' target='_blank' rel='noopener noreferrer'>
            CV
          </Link>
        </div>
        <div class='open-header'>
          {!mobileOpen ? (
            <CgMenuRightAlt class='hamburger-menu' onClick={openNav} color={colors.cream} height='25px' width={25} />
          ) : (
            <div>
              <IoCloseOutline onClick={closeNav} class='close-mobile' color={colors.cream} />
            </div>
          )}
          <aside class='mobile-navbar' id='mobile-navbar'>
            <div>
              <a
                href='#about'
                class='mobile-link'
                onClick={() => {
                  navigateTo('/');
                  closeNav();
                }}>
                <p class='header-number'> 01. </p>
                About Me
              </a>
              <a
                class='mobile-link'
                href='#my-work'
                onClick={() => {
                  navigateTo('/');
                  closeNav();
                }}>
                <p class='header-number'> 02. </p>
                My Work
              </a>
              <a
                class='mobile-link'
                href='#experience'
                onClick={() => {
                  navigateTo('/');
                  closeNav();
                }}>
                <p class='header-number'> 03. </p>
                Experience
              </a>
              <a
                class='mobile-link'
                href='#contact'
                onClick={() => {
                  navigateTo('/');
                  closeNav();
                }}>
                <p class='header-number'> 04. </p>
                Contact
              </a>
              <Link class='mobile-resume' to='/resume' target='_blank' rel='noopener noreferrer'>
                CV
              </Link>
            </div>
            <div class='header-socials'>
              <div className='socials-outer-ctn'>
                <div className='socials-ctn'>
                  <a href='https://www.linkedin.com/in/matthieu-denis1141/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} class='icon' />
                  </a>
                  <a href='https://github.com/Matthieu114' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} class='icon' />
                  </a>
                  <a href='https://www.instagram.com/matthieu114/' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} class='icon' />
                  </a>
                  <a href='https://www.messenger.com/t/5398311623579890/' target='_blank'>
                    <FontAwesomeIcon icon={faFacebookMessenger} class='icon' />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
