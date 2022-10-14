import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ img, desc, path, name, categ }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div class='project-container' onClick={() => navigateTo(path)}>
      <img src={img} />
      <div class='content'>
        <div class='about-button'>{name}</div>
        <div class='about-desc'>{desc}</div>
      </div>
    </div>
  );
};

export default Project;
