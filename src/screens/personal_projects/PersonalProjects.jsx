import React, { useState, useEffect, useMemo, useRef } from 'react';
import Project from './components/Project';
import { projects } from '../../data/projects';

const PersonalProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedCategory, setCategory] = useState('All');
  const refs = useRef([]);
  const filteredList = useMemo(getFilteredList, [selectedCategory, projectsList]);

  function getFilteredList() {
    return selectedCategory !== 'All'
      ? projectsList.filter((project) => project.category === selectedCategory)
      : projectsList;
  }

  function calculateCategoriesInProjects() {
    // calculate number of times we encounter a category
    // if it already exists in acc increment it otherwise initialise it at
    return projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {});
  }

  // create filter bar values
  const filterOptions = useMemo(() => {
    // object containing the count of each category {key: count}
    const categoryCounts = calculateCategoriesInProjects();

    const allFiltersObject = { id: 1, name: 'All', category: 'All', quantity: projects.length, selected: true };
    const otherCalculatedFiltersObject = Object.entries(categoryCounts).map(([category, quantity], index) => ({
      id: index + 2,
      name: category.charAt(0).toUpperCase() + category.slice(1), // capitalise
      quantity,
      category,
      selected: false,
    }));
    return [allFiltersObject, ...otherCalculatedFiltersObject];
  }, []);

  useEffect(() => {
    // set initial projects list
    setProjectsList(projects);
  }, []);

  useEffect(() => {
    refs.current.forEach((el) => el?.classList.remove('fade-in'));
    refs.current.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('fade-in');
        }, 200 * index);
      }
    });
  }, [filteredList]);

  const handleCategoryChange = (filter) => {
    if (selectedCategory === filter.category) {
      return;
    }
    setCategory(filter.category);
  };

  return (
    <div className="root-container" id="my-work">
      <div className="projects-title-container">
        <h1 className="projects-title">
          <span className="projects-title-normal">Projects </span>
          {" I've built".split('').map((char, i) => (
            <span className="projects-title-animate" key={'perso-projects-title-span-' + i}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <div className="projects-about">
          These are the projects I have worked on in my own free time. <br /> They range from video games to chat apps
          to music player clones
        </div>
      </div>
      <section className="projects-section">
        <div className="filter-projects-container">
          <ul className="filter-projects-list">
            <li className="list-item list-item-label">Filter By</li>
            {filterOptions.map((filter, index) => {
              return (
                <li className="list-item" key={'filter-' + filter.id}>
                  <button
                    className={`list-link btn-as-link ${selectedCategory === filter.category ? 'active' : ''}`}
                    id={filter.id}
                    onClick={() => handleCategoryChange(filter)}
                  >
                    {filter.name}
                    <span className={`filter-badge  ${selectedCategory === filter.category ? 'active' : ''}`}>
                      {filter.quantity}
                    </span>
                  </button>
                  &nbsp;
                  {index < filterOptions.length - 1 ? '\t/' : ''}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="projects-container" id="project-container">
          {filteredList.map((project, index) => {
            return (
              <Project
                key={project.id || index}
                i={index}
                img={project.img}
                desc={project.description}
                path={project.path}
                name={project.name}
                alt={project.alt}
                ref={(el) => (refs.current[index] = el)}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default PersonalProjects;

// TODO EXTRACT ANIMATION CODE INTO HELPERS AND HAVE HELPERS IN GENERAL ==> create a helper for all the observers

// TODO IMPROVE WEB PERFORMANCE THAT IS TERRIBLE
// images to webp
// properyl sized images
// use memo

// TODO change theme + rename all color variables
// TODO change personnal photo
// TODO Change domain to my name MatthieuDenis.dev

// TODO fix accessibility and use semantics

// TODO fix professional experience box that has fixed and not adaptive height

// TODO create helper function for the titles about me
