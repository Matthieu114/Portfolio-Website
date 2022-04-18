import React, { useState } from 'react';
import Header from '../components/Header';
import colors from '../config/colors';
import programmerImage from '../assets/undraw_Programming_re_kg9v.png';
import svg from '../assets/svg.png';
import { ReactComponent as YourSvg } from '../assets/undrawsvg.svg';
import { AiOutlineSearch } from 'react-icons/ai';

const LandingPage = ({ fullpageApi }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  const moveToSection = (sectionId) => {
    fullpageApi.moveTo(sectionId);
    fullpageApi.scrollOverflow(true);
  };

  return (
    <div style={styles.landingPageRoot}>
      <div class='landing-blue-background' />
      <div class='landing-blue-background-two' />

      <Header moveTo={moveToSection} />
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
              I am a computer science student passionate about <br /> Web and Game Development
            </h3>
          </div>
          <div style={styles.buttonsContainer}>
            <div class='hireMeButton' style={styles.hireMeButton} onClick={() => moveToSection(4)}>
              Hire me
            </div>
            <div style={styles.seeMyWorkButton} class='seeMyWorkButton' onClick={() => moveToSection(2)}>
              <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> See my work
            </div>
          </div>
        </div>
        <div style={{ zIndex: 10 }}>
          <YourSvg style={styles.svgImage} class='landing-page-svg fade-2' />
        </div>
      </div>
    </div>
  );
};

const styles = {
  landingPageRoot: {
    padding: '0 100px',
    position: 'relative',
    width: '100%',
    height: '100%'
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
    fontSize: 54
  },
  descriptionText: {
    fontSize: 22,
    fontWeight: '600'
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
