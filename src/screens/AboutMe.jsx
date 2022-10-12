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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
          <br />
        </div>
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
    padding: '100px 275px'
  },
  leftContainer: {
    heigth: '100%',
    width: '50vw'
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
    alignItems: 'left',
    flexDirection: 'column',
    heigth: '100%',
    width: '50vw'
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
    fontWeight: '500',
    maxWidth: '700px'
  }
};

export default AboutMe;
