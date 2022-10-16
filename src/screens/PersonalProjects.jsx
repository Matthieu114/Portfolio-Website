import React, { useState, useEffect, useMemo } from 'react';
import Project from '../components/Project';
import { projects } from '../data/projects';

const PersonalProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedCategory, setCategory] = useState();
  const [activeItem, setActiveItem] = useState({ activeItemId: 1 });
  let filteredList = useMemo(getFilteredList, [selectedCategory, projectsList]);

  useEffect(() => {
    setProjectsList(projects);
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const setActiveTarget = (event) => {
    setActiveItem(event.currentTarget.id);
    event.currentTarget.classList.toggle('active');
  };

  function getFilteredList() {
    if (!selectedCategory) return projectsList;

    return projectsList.filter((project) => project.category === selectedCategory);
  }

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
              <a
                class='list-link'
                data-list-item='all'
                onClick={(e) => {
                  handleCategoryChange(undefined);
                  setActiveTarget(e);
                }}>
                All
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a
                class='list-link'
                data-list-item='web'
                onClick={(e) => {
                  handleCategoryChange('web');
                  setActiveTarget(e);
                }}>
                Web Apps
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a
                class='list-link'
                data-list-item='data'
                onClick={(e) => {
                  handleCategoryChange('data');
                  setActiveTarget(e);
                }}>
                Data science
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a
                class='list-link'
                data-list-item='game'
                onClick={(e) => {
                  handleCategoryChange('game');
                  setActiveTarget(e);
                }}>
                Games
              </a>
              &nbsp;
              {'\t/'}
            </li>
            <li class='list-item'>
              <a
                class='list-link'
                data-list-item='mobile'
                onClick={(e) => {
                  handleCategoryChange('mobile');
                  setActiveTarget(e);
                }}>
                Mobile Apps
              </a>
            </li>
          </ul>
        </div>
        <div class='projects-container' id='project-container'>
          {filteredList.map((project) => {
            return <Project img={project.img} desc={project.description} path={project.path} name={project.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
