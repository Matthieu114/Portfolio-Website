import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';
import MyExperiences from './MyExperiences';
import colors from '../config/colors';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div style={styles.root}>
      <LandingPage />
      <AboutMe />
      <PersonalProjects />
      <MyExperiences />
      <Contact />
      <Outlet />
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
