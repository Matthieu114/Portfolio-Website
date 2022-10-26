import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './PersonalProjects';
import MyExperiences from './MyExperiences';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div className='main-root'>
      <LandingPage />
      <AboutMe />
      <PersonalProjects />
      <MyExperiences />
      <Contact />
      <Outlet />
    </div>
  );
};

export default MainPage;
