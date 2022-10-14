import React from 'react';

import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';

const MainPage = () => {
  const closeNav = () => {
    document.getElementById('my-sidenav').style.width = '0px';
  };

  return (
    <div style={styles.root} onClick={closeNav}>
      <LandingPage />
      <AboutMe />
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
