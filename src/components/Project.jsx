import React from 'react';
import src from '../assets/IMG_3244.jpeg';

const Project = () => {
  return (
    <div class='project-container'>
      <img src={src} class='blur zoom'></img>
      <div class='content fade'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum blanditiis eum soluta non quidem officia iusto ex! Recusandae ducimus at modi doloribus delectus aliquid, dicta, sit aspernatur
        laboriosam, vitae quam.
      </div>
    </div>
  );
};

export default Project;
