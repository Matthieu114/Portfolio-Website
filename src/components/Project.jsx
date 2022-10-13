import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ img, desc, path, name, categ }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  console.log(img);

  return (
    <div class='project-container' onClick={() => navigateTo(path)}>
      <img src={img} class='blur zoom'></img>
      <div class='content fade'>{desc}</div>
    </div>
  );
};

export default Project;
