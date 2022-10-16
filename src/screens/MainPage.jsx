import React from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';

const MainPage = () => {
  return (
    <div style={styles.root}>
      <LandingPage />
      <AboutMe />
      <PersonalProjects />
      {/* <AboutMe /> */}
    </div>
  );
};

const styles = {
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh'
  }
};

export default MainPage;
