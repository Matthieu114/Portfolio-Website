import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from './landing_page/LandingPage';
import AboutMe from './about_me/AboutMe';
import PersonalProjects from './personal_projects/PersonalProjects';
import MyExperiences from './professional_experiences/MyExperiences';
import Contact from './contact_me/Contact';

const MainPage = () => {
  return (
    <div className="main-root">
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
