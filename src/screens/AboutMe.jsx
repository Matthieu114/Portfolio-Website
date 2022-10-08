import React from 'react';
import colors from '../config/colors';
import background from '../assets/future-grid.webp';
import img from '../assets/croppedimage.jpeg';

const AboutMe = () => {
  return (
    <div style={styles.root}>
      <img src={img} style={styles.heroImage} />
      <div style={styles.rightSquare}>01. About Me</div>
    </div>
  );
};

const styles = {
  root: {
    width: '100%',
    heigth: '100vh',
    display: 'flex',
    position: 'relative',
    backgroundColor: colors.darkBlue
  },
  rightSquare: {
    heigth: '100%',
    width: '50vw'
  },
  heroImage: {
    width: '50vw',
    heigth: '100%'
  }
};

export default AboutMe;
