import React from 'react';
import colors from '../config/colors';

const Separator = () => {
  return <div style={styles.root} />;
};

const styles = {
  root: {
    backgroundColor: colors.lightestBlue,
    width: '100vw',
    height: '100px'
  }
};

export default Separator;
