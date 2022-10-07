import React, { useState } from 'react';
import colors from '../config/colors';
import img from '../assets/future-grid.webp';
import { ReactComponent as YourSvg } from '../assets/undrawsvg.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  return (
    <div style={styles.landingPageRoot} data-landing-intersect>
      <div style={styles.mainContainer}>
        <div style={styles.textContainer} class={isLoaded ? 'fade active' : 'fade'}>
          <div>
            <h1 style={styles.mainText}>
              Hi! I am
              <p style={{ margin: 0, padding: 0, color: colors.fandagoPink }}>
                Matthieu Denis <span style={{ color: colors.black }}>.</span>
              </p>
            </h1>
            <h3 style={styles.descriptionText}>
              I am a student passionate about <b>Web</b> and <b>Game Development</b>. <br />
              <br /> Currently, I am in my last year of scool at{' '}
              <a href='https://www.ece.fr/en/program/engineering-degree-bac4-big-data-analytics-major/' class='description-link-ece'>
                ECE paris engineering school
              </a>{' '}
              where I am studying data science and machine learning.
            </h3>
          </div>
          <div style={styles.buttonsContainer}>
            <div class='hireMeButton from-left' style={styles.hireMeButton}>
              Hire me
            </div>
            <div style={styles.seeMyWorkButton} class='seeMyWorkButton'>
              <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> See my work
            </div>
          </div>
        </div>
        <div></div>
        <div style={{ zIndex: 10 }}>
          <YourSvg style={styles.svgImage} class='landing-page-svg fade-2' />
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
    padding: '0 100px',
    backgroundImage: `url(${img})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
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
    zIndex: 50
  },

  mainText: {
    fontSize: 80
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.lightestBlue,
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
    padding: '0.8rem 4rem',
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
    maxWidth: '35vw',
    minHeight: '500px',
    minWidth: '500px'
  }
};

export default LandingPage;
