import React, { useState } from 'react';
import colors from '../config/colors';
import { AiOutlineSearch } from 'react-icons/ai';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/animOrange.json';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  return (
    <div style={styles.landingPageRoot} id='home'>
      <div style={styles.mainContainer}>
        <div style={styles.textContainer} class={isLoaded ? 'fade active' : 'fade'}>
          <div>
            <h1 style={styles.mainText}>
              Hi! I am
              <p style={{ margin: 0, padding: 0, color: colors.fandagoPink }}>
                Matthieu Denis <span style={{ color: colors.white }}>.</span>
              </p>
            </h1>
            <h3 style={styles.descriptionText} class='description'>
              I am a student passionate about <b>Web</b> and <b>Game Development</b>. <br /> Currently, I am in my last year of studies at{' '}
              <a href='https://www.ece.fr/en/program/engineering-degree-bac4-big-data-analytics-major/' class='description-link-ece' target='_blank'>
                ECE paris engineering school
              </a>{' '}
              where I am learning about data science and machine learning.
            </h3>
          </div>
          <div style={styles.buttonsContainer}>
            <a href='#my-work' class='hireMeButton' style={styles.hireMeButton}>
              See my work
            </a>
            <div style={styles.seeMyWorkButton} class='seeMyWorkButton'>
              <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> Hire me
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Lottie animationData={codingAnimation} style={styles.svgImage} class='landing-page-svg fade-2' />;
        </div>
      </div>
    </div>
  );
};

const styles = {
  landingPageRoot: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    padding: '0 150px',
    backgroundColor: colors.darkBlue
  },

  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    opacity: 1
  },
  textContainer: {
    marginBottom: '5rem',
    zIndex: 50,
    color: colors.white
  },

  mainText: {
    fontSize: 80
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.cream,
    maxWidth: '750px'
  },

  buttonsContainer: {
    display: 'flex',
    marginTop: '3rem'
  },

  hireMeButton: {
    backgroundColor: colors.fandagoPink,
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: '0.8rem 3rem',
    fontSize: 20
  },
  seeMyWorkButton: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '3rem',
    color: colors.fandagoPink,
    fontSize: 20,
    fontWeight: '500'
  },
  svgImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '30vw',
    minHeight: '350px',
    minWidth: '350px'
  }
};

export default LandingPage;
