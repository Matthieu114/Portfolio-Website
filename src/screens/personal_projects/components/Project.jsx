import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Project = forwardRef(({ img, desc, path, name, alt, i }, ref) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <li ref={ref} key={'personnal-project' + i} className="project-container" onClick={() => navigateTo(path)}>
      <img src={img} loading="lazy" alt={alt} />
      <div className="content">
        <div className="about-button">{name}</div>
        <div className="about-desc">{desc}</div>
      </div>
    </li>
  );
});

// TODO fix animations when filtering

export default Project;
