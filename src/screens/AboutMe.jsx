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
    <div style={styles.root} id='about'>
      <div style={styles.leftContainer}>
        <div style={styles.heroImageBg}>
          <img src={img} style={styles.heroImage} />
        </div>
      </div>
      <div style={styles.rightContainer}>
        <h1 style={styles.aboutMeHeader}>About Me</h1>
        <div>
          <p style={styles.typedSection} class='typed-section'>
            {'>'} <span ref={el}></span>
          </p>
        </div>
        <div style={styles.description} class='about-description'>
          Hi! I’m Matthieu , a French engineering student with a love of programming that enjoys creating functional web and mobile apps! Currently, I am having fun learning game development on the
          side of my data science and machine learning classes that I follow in school. <br />
          <br /> I grew up and studied in <span style={{ color: colors.fandagoPink, fontWeight: 500 }}> 5 different countries</span> ( USA, France, UK, Poland , Russia ) where I grew accustomed to
          evolving in multicultural environments. <br />
          <br />
          Well organised , independent , curious with high attention to detail I am avid to learn more about the tech domain in general and work on ambitious projects with positive people!
          <br />
          <br />
          Here are some of the technologies I've worked with:
        </div>
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
  );
};

const styles = {
  root: {
    width: '100%',
    heigth: '100vh',
    display: 'flex',
    position: 'relative',
    backgroundColor: colors.lightestBlue,
    color: colors.white,
    alignItems: 'center',
    padding: '100px 150px'
  },
  leftContainer: {
    heigth: '100%',
    width: '100%'
  },
  aboutMeHeader: {
    color: colors.fandagoPink,
    padding: 0,
    margin: '0 0 1rem 0'
  },
  typedSection: {
    color: colors.cream,
    fontSize: '3rem',
    fontWeight: '500',
    margin: '0',
    padding: 0,
    height: '90px'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    heigth: '100%',
    width: '100%'
  },
  heroImageBg: {
    backgroundColor: colors.darkBlue,
    borderRadius: '50%',
    width: '25vw',
    heigth: '25vh'
  },
  heroImage: {
    width: '25vw',
    heigth: '25vh',
    borderRadius: '5px'
  },
  description: {
    color: colors.softGray,
    fontSize: '1.1rem',
    maxWidth: '700px'
  }
};

export default AboutMe;
