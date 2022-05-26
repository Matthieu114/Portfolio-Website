import React, { useState } from 'react';
import Project from '../components/Project';
import colors from '../config/colors';
import GamingProject from './projects/GamingProjects';
import MobileProjects from './projects/MobileProjects';
import WebProjects from './projects/WebProjects';
import Projects from '../projects';

// const ProjectModal = ({ closeModal, isShown, id, isLoaded, setIsLoaded }) => {
//   return (
//     isShown && (
//       <div className='project-modal-root' onClick={closeModal}>
//         {id == '1' && isLoaded ? <GamingProject /> : ''}
//         {id == '2' && isLoaded ? <WebProjects /> : ''}
//         {id == '3' && isLoaded ? <MobileProjects /> : ''}
//       </div>
//     )
//   );
// };

const PersonalProjects = ({ fullpageApi }) => {
  const [isShown, setIsShown] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

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
            return <Project src={project.src} title={project.title} description={project.description} id={project.id} path={project.path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
