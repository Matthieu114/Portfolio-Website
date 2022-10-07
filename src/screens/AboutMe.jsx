import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../config/colors';
import img from '../assets/croppedimage.jpeg';

const AboutMe = () => {
  return (
    <div style={styles.root}>
      <img src={img} style={styles.heroImage} />
      <div style={styles.rightSquare}>About</div>
    </div>
  );
};

const styles = {
  root: {
    width: '100%',
    heigth: '100vh',
    display: 'flex'
  },
  rightSquare: {
    backgroundColor: colors.darkBlue,
    heigth: '100%',
    width: '100%'
  },
  heroImage: {
    width: '50vw',
    heigth: '100%'
  }
};

export default AboutMe;
