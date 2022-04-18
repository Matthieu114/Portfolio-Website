import React from 'react';

const Project = ({ src, title, description, openModal, id }) => {
  return (
    <div class='project-content-container'>
      <img src={src} class='project-image' />
      <div class='project-title'>{title}</div>
      <div class='project-description'>{description}</div>
      <div class='see-more-button-container'>
        <div class='project-see-more-button from-left' onClick={() => openModal(id)}>
          See more
        </div>
      </div>
    </div>
  );
};

export default Project;
