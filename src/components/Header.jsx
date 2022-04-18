import React from 'react';
import colors from '../config/colors';

const Header = ({ moveTo }) => {
  return (
    <div style={styles.root}>
      <div></div>
      <div style={styles.headerContent}>
        <div style={styles.homeLogo}>Personal</div>
        <div style={styles.headerLinks}>
          <div class='headerLink' style={styles.link} onClick={() => moveTo(2)}>
            My Work
          </div>
          <div class='headerLink' style={styles.link}>
            Resume
          </div>
          <div class='headerLink' style={styles.link}>
            About Me
          </div>
          <div class='headerLink' style={styles.link}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  root: {
    width: '100%',
    height: '92px',
    display: 'flex',
    alignItems: 'center',
    // boxShadow: `0px 1.5px 3px 0px rgba(0, 0, 0, 0.1)`,
    zIndex: 100,
    // backgroundColor: colors.white,
    position: 'absolute',
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
    fontSize: '1rem',
    fontWeight: 600,
    marginLeft: '3rem',
    ':hover': {
      color: colors.fandagoPink
    }
  }
};
export default Header;
