import React, { useState, useEffect, useMemo } from 'react';
import Project from '../components/Project';
import { projects } from '../data/projects';

const filterOptions = [
  {
    id: 1,
    name: 'All',
    category: undefined,
    slash: '\t/',
    quantity: 5
  },
  {
    id: 2,
    name: 'Web Apps',
    category: 'web',
    slash: '\t/',
    quantity: 3
  },
  {
    id: 3,
    name: 'Data Science',
    category: 'data',
    slash: '\t/',
    quantity: 0
  },
  {
    id: 4,
    name: 'Games',
    category: 'game',
    slash: '\t/',
    quantity: 1
  },
  {
    id: 5,
    name: 'Mobile Apps',
    category: 'mobile',
    slash: '',
    quantity: 1
  }
];

const PersonalProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedCategory, setCategory] = useState();
  const [activeItem, setActiveItem] = useState(filterOptions[0]);
  let filteredList = useMemo(getFilteredList, [selectedCategory, projectsList]);

  useEffect(() => {
    setProjectsList(projects);
  }, []);

  const handleCategoryChange = (filter) => {
    setActiveItem(filter);
    setCategory(filter.category);
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
            {filterOptions.map((filter) => {
              return (
                <li class='list-item'>
                  <a class={`list-link  ${activeItem == filter && 'active'}`} id={filter.id} onClick={() => handleCategoryChange(filter)}>
                    {filter.name}
                    <span class={`filter-badge  ${activeItem == filter && 'active'}`}>{filter.quantity}</span>
                  </a>
                  &nbsp;
                  {filter.slash}
                </li>
              );
            })}
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
