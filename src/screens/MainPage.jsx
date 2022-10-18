import React from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';
import MyExperiences from './MyExperiences';

const MainPage = () => {
  return (
    <div style={styles.root}>
      <LandingPage />
      <AboutMe />
      <PersonalProjects />
      <MyExperiences />
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
