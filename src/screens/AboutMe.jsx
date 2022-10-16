import React, { useEffect, useMemo, useRef, useState } from 'react';
import colors from '../config/colors';
import img from '../assets/pixelart2.png';
import Typed from 'typed.js';

const AboutMe = () => {
  const el = useRef(null);
  const targetRefImg = useRef(null);
  const targetRefDesc = useRef(null);
  const [isImgVisible, setIsImgVisible] = useState(null);
  const [isDescVisible, setIsDescVisible] = useState(null);

  const imageCbObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsImgVisible(entry.isIntersecting);
      } else {
        setIsImgVisible(entry.isIntersecting);
      }
    });
  };

  const descCbObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsDescVisible(entry.isIntersecting);
      } else {
        setIsDescVisible(entry.isIntersecting);
      }
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.2
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Traveler', 'Developer', 'Musician', 'Problem Solver', 'Gamer'],
      startDelay: 300,
      typeSpeed: 155,
      backDelay: 150,
      backSpeed: 100,
      showCursor: false,
      smartBackspace: true,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(imageCbObserver, options);

    const currentImageTarget = targetRefImg.current;

    if (currentImageTarget) imageObserver.observe(currentImageTarget);

    return () => {
      if (currentImageTarget) imageObserver.unobserve(currentImageTarget);
    };
  }, [targetRefImg, options]);

  useEffect(() => {
    const descObserver = new IntersectionObserver(descCbObserver, options);
    const currentDescTarget = targetRefDesc.current;

    if (currentDescTarget) descObserver.observe(currentDescTarget);

    return () => {
      if (currentDescTarget) descObserver.unobserve(currentDescTarget);
    };
  }, [targetRefDesc, options]);

  return (
    <section class='about-root' id='about'>
      <div class={`about-left-ctn ${!isImgVisible ? 'about-hidden' : 'fade-in'}`} ref={targetRefImg}>
        <div class='hero-img-ctn'>
          <img src={img} />
        </div>
      </div>
      <div class={`about-right-ctn ${!isDescVisible ? 'about-slide' : 'slide-in'}`} ref={targetRefDesc}>
        <h1 class='about-me-header ' data-about-me='heading'>
          About Me
        </h1>
        <div class='typed-container' data-about-me='typed'>
          <p class='typed-section'>
            {'>'} <span ref={el}></span>
          </p>
        </div>
        <div class='about-description' data-about-me='description'>
          Hi! I’m Matthieu , a French engineering student with a love of programming that enjoys creating functional web and mobile apps! Currently, I am having fun learning game development on the
          side of my data science and machine learning classes that I follow in school. <br />
          <br /> I grew up and studied in <span style={{ color: colors.fandagoPink, fontWeight: 500 }}> 5 different countries</span> ( USA, France, UK, Poland , Russia ) where I grew accustomed to
          evolving in multicultural environments. <br />
          <br />
          Well organised , independent , curious with high attention to detail I am avid to learn more about the tech domain in general and work on ambitious projects with positive people!
          <br />
          <br />
          Here are some of the technologies I've worked with:
          <ul class='skills-list' data-about-me='skills'>
            <li>Javascript (ES6+)</li>
            <li>React </li>
            <li>React Native </li>
            <li>Ember.js</li>
            <li>Node.Js</li>
            <li>Git</li>
            <li>C#</li>
            <li>Cypress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
