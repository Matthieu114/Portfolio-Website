import React, { useState } from 'react';
import Project from '../components/Project';
import joystick from '../assets/game-controller.png';
import web from '../assets/programming.png';
import mobile from '../assets/iphone.png';
import colors from '../config/colors';
import GamingProject from './GamingProjects';
import MobileProjects from './MobileProjects';
import WebProjects from './WebProjects';

const ProjectModal = ({ closeModal, isShown, id, isLoaded, setIsLoaded }) => {
  return (
    isShown && (
      <div class='project-modal-root' onClick={closeModal}>
        {id == '1' && isLoaded ? <GamingProject /> : ''}
        {id == '2' && isLoaded ? <WebProjects /> : ''}
        {id == '3' && isLoaded ? <MobileProjects /> : ''}
      </div>
    )
  );
};

const PersonalProjects = ({ fullpageApi }) => {
  const [isShown, setIsShown] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const descripStyle = { color: colors.fandagoPink, fontWeight: '600' };

  const openModal = (id) => {
    setIsShown(true);
    fullpageApi.setAllowScrolling(false);
    setProjectId(id);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  const closeModal = () => {
    setIsShown(false);
    fullpageApi.setAllowScrolling(true);
    setIsLoaded(false);
  };

  const Projects = [
    {
      id: 1,
      src: joystick,
      title: 'Game Development',
      description: (
        <p>
          Games made with Unity. Programming languages used: <span style={descripStyle}>Lua / C#</span>
        </p>
      )
    },
    {
      id: 2,
      src: web,
      title: 'Web Development',
      description: (
        <p>
          My computer web app projects. Programming languages used: <span style={descripStyle}>Javascript ES6 ( React.js)</span>
        </p>
      )
    },
    {
      id: 3,
      src: mobile,
      title: 'Mobile Development',
      description: (
        <p>
          Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
        </p>
      )
    }
  ];

  return (
    <div class='root-container'>
      <ProjectModal closeModal={closeModal} isShown={isShown} id={projectId} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <div class='projects-title-container'>
        <div class='projects-title'>My personal projects</div>
        <div class='projects-about'>These are the projects I have worked on in school and in my own free time. They range from video games to chat apps to music player clones</div>
      </div>
      <div>
        <div class='projects-outer-container'>
          {Projects.map((project) => {
            return <Project src={project.src} title={project.title} description={project.description} id={project.id} openModal={openModal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
