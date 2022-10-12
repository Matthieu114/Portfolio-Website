import React from 'react';
import colors from '../config/colors';
import img from '../assets/pixelart2.png';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const AboutMe = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Travel', 'Developer', 'Music', 'Problem Solver', 'Gamer'],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 120,
      backSpeed: 150,
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
    <div style={styles.root}>
      <div style={styles.leftContainer}>
        <div style={styles.heroImageBg}>
          <img src={img} style={styles.heroImage} />
        </div>
      </div>
      <div style={styles.rightContainer}>
        <h1 style={styles.aboutMeHeader}>About Me</h1>
        <div>
          <p style={styles.typedSection} ref={el}>
            {'>'} <span ref={el}></span>
          </p>
        </div>
        <div style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
          <br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
    fontSize: '3.5rem',
    fontWeight: '600',
    margin: '0',
    padding: 0,
    height: '98px'
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
    color: 'lightgray'
  }
};

export default AboutMe;
