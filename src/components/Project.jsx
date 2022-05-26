import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Project = ({ src, title, description, id, path }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div class='project-content-container' id={id}>
      <img src={src} class='project-image' />
      <div class='project-title'>{title}</div>
      <div class='project-description'>{description}</div>
      <div class='see-more-button-container'>
        <div class='project-see-more-button from-left' onClick={() => navigateTo(path)}>
          See more
        </div>
      </div>
    </div>
  );
};

export default Project;
