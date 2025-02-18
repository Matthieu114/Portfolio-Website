import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import PersonalProjects from './personal_projects/PersonalProjects';
import MyExperiences from './MyExperiences';
import Contact from './contact_me/Contact';

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
