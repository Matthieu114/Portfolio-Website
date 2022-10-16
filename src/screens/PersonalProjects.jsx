import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  const projectRef = useRef(null);
  const refs = useRef([]);
  const [isVisible, setIsVisible] = useState(null);

  const [projectsList, setProjectsList] = useState([]);
  const [selectedCategory, setCategory] = useState();
  const [activeItem, setActiveItem] = useState(filterOptions[0]);
  let filteredList = useMemo(getFilteredList, [selectedCategory, projectsList]);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        refs.current.forEach((ref) => {
          ref.classList.add('project-fade-in');
        });
        // setIsVisible(entry.isIntersecting);
      } else {
        refs.current.forEach((ref) => {
          ref.classList.remove('project-fade-in');
        });
        // setIsVisible(entry.isIntersecting);
      }
    });
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0
    };
  }, []);

  useEffect(() => {
    setProjectsList(projects);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projectRef.current, options, selectedCategory, refs.current.length]);

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
        <div class='projects-container' id='project-container' ref={projectRef}>
          {filteredList.map((project, index) => {
            return <Project key={index} i={index} img={project.img} desc={project.description} path={project.path} name={project.name} refs={refs} isvisible={isVisible} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
