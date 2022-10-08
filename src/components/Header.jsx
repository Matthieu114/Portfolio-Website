import React, { useState } from 'react';
import colors from '../config/colors';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.root}>
      <div style={styles.headerContent}>
        <div style={styles.homeLogo} onClick={() => navigateTo('/')}>
          MD
        </div>
        <div></div>
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
  //rgba(105,25,255,0.56)
  root: {
    width: '100%',
    boxShadow: `3px -2px 44px 1px rgba(105,25,255,0.3)`,
    backdropFilter: `blur(5px)`,
    color: colors.white,
    backgroundColor: 'rgba(15, 25, 34, 0.6)',
    height: '72px',
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
    },
    cursor: 'pointer'
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
    borderRadius: '2px',
    border: `2px solid ${colors.fandagoPink}`,
    fontSize: '0.9rem',
    fontWeight: 400
  }
};
export default Header;
