import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ img, desc, path, name, alt, i, isVisible }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <li key={'personnal-project' + i} className={`project-container fade-in`} onClick={() => navigateTo(path)}>
      <img src={img} loading='lazy' alt={alt} />
      <div className='content'>
        <div className='about-button'>{name}</div>
        <div className='about-desc'>{desc}</div>
      </div>
    </li>
  );
};

// TODO fix animations when filtering

export default Project;
