import React, { useState } from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';
import Separator from '../components/Separator';

const MainPage = ({ fullpageApi }) => {
  return (
    <div style={styles.root}>
      <LandingPage />

      <AboutMe />
      <Separator />
      <PersonalProjects />
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
