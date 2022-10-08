import React from 'react';
import colors from '../config/colors';

const Separator = () => {
  return <div style={styles.root} data-landing-intersect />;
};

const styles = {
  root: {
    backgroundColor: colors.cream,
    width: '100vw',
    height: '100px'
  }
};

export default Separator;
