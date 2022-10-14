import React, { useState } from 'react';
import Project from '../components/Project';
import { projects } from '../data/projects';

const PersonalProjects = ({ fullpageApi }) => {
  return (
    <div class='root-container' id='my-work'>
      <div class='projects-title-container'>
        <h1 class='projects-title'>A few things i've built</h1>
        <div class='projects-about'>These are the projects I have worked on in school and in my own free time. They range from video games to chat apps to music player clones</div>
      </div>
      <div>
        <div class='filter-projects-container'>
          <ul class='filter-projects-list'>
            <li class='list-item'>Filter By</li>
            <li class='list-item'>
              <a href='#' class='list-link active'>
                All
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a href='#' class='list-link'>
                Web Apps
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a href='#' class='list-link'>
                Data science
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a href='#' class='list-link'>
                Games
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a href='#' class='list-link'>
                Mobile Apps
              </a>
            </li>
          </ul>
        </div>
        <div class='projects-container'>
          {projects.map((project) => {
            return <Project img={project.img} desc={project.description} path={project.path} name={project.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
