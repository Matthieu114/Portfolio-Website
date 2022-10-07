import React, { useState } from 'react';
import { useEffect } from 'react';
import colors from '../config/colors';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const playlistIntersect = document.querySelector('[data-landing-intersectt]');

  const sectionOptions = {
    rootMargin: '500px 0px 0px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, sectionOptions);

  if (playlistIntersect !== null) sectionObserver.observe(playlistIntersect);

  return (
    <div style={navbar ? styles.root2 : styles.root} data-landing-intersectt>
      <div style={styles.headerContent}>
        <div style={styles.homeLogo}>Personal</div>
        <div style={styles.headerLinks}>
          <div class='headerLink' style={styles.link}>
            <p style={styles.headerNumber}> 01. </p>About Me
          </div>
          <div class='headerLink' style={styles.link}>
            <p style={styles.headerNumber}> 02. </p>Experience
          </div>
          <div class='headerLink' style={styles.link}>
            <p style={styles.headerNumber}> 03. </p> My Work
          </div>
          <div class='headerLink' style={styles.link}>
            <p style={styles.headerNumber}> 04. </p>Contact
          </div>
          <div class='resumeButton' style={styles.resumeButton}>
            Resume
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: {
    width: '100%',
    color: colors.black,
    height: '92px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    top: 0
  },
  root2: {
    backgroundOpacity: '90%',
    width: '100%',
    color: colors.white,
    height: '92px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    top: 0
  },
  headerContent: {
    margin: '0 100px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  headerLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '600'
  },
  homeLogo: {
    color: colors.fandagoPink,
    fontSize: 36,
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: 'black'
    }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    fontWeight: 450,
    marginRight: '2.5rem',
    ':hover': {
      color: colors.fandagoPink
    }
  },
  headerNumber: {
    paddingRight: '0.5rem',
    color: colors.fandagoPink
  },
  resumeButton: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: `2px solid ${colors.fandagoPink}`,
    fontSize: '0.9rem',
    fontWeight: 400
  }
};
export default Header;
