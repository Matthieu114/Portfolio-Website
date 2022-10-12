import React from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';
import Separator from '../components/Separator';

const MainPage = () => {
  return (
    <div style={styles.root}>
      <LandingPage />
      {/* <Separator /> */}
      <AboutMe />
      {/* <Separator /> */}
      <PersonalProjects />
      {/* <LandingPage /> */}
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
