import React, { useState } from 'react';
import Project from '../components/Project';
import Projects from '../projects';

const PersonalProjects = ({ fullpageApi }) => {
  return (
    <div class='root-container'>
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
