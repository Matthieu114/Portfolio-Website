import React from 'react';
import colors from '../config/colors';
import img from '../assets/pixelart2.png';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const AboutMe = () => {
  const el = useRef(null);

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
  });

  setTimeout(() => {
    new Typed('#typed', {
      strings: [`Hi! my name is Matthieu!`],
      typeSpeed: 40,
      loop: false
    });
  }, 3000);

  return (
    <div class='about-root' id='about'>
      <div class='about-left-ctn'>
        <div class='hero-img-ctn'>
          <img src={img} />
        </div>
      </div>
      <div class='about-right-ctn'>
        <h1 class='about-me-header'>About Me</h1>
        <div class='typed-container'>
          <p class='typed-section'>
            {'>'} <span ref={el}></span>
          </p>
        </div>
        <div class='about-description'>
          Hi! I’m Matthieu , a French engineering student with a love of programming that enjoys creating functional web and mobile apps! Currently, I am having fun learning game development on the
          side of my data science and machine learning classes that I follow in school. <br />
          <br /> I grew up and studied in <span style={{ color: colors.fandagoPink, fontWeight: 500 }}> 5 different countries</span> ( USA, France, UK, Poland , Russia ) where I grew accustomed to
          evolving in multicultural environments. <br />
          <br />
          Well organised , independent , curious with high attention to detail I am avid to learn more about the tech domain in general and work on ambitious projects with positive people!
          <br />
          <br />
          Here are some of the technologies I've worked with:
          <ul class='skills-list'>
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
    </div>
  );
};

export default AboutMe;
