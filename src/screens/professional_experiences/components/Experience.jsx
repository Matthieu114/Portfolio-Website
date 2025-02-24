import React, { forwardRef } from 'react';

const Experience = forwardRef(({ exp, index }, ref) => {
  return (
    <div className="experience-card" key={index} ref={ref}>
      <div className="experience-image">
        <img src={exp.img} alt={exp.alt} loading="lazy" />
      </div>
      <div className="experience-content">
        <h2 className="experience-position">
          {exp.name}{' '}
          <span>
            {' '}
            <br />
            {'//'} {exp.company}
          </span>
        </h2>
        <p className="experience-duration">
          {exp.duration} - {exp.location}
        </p>
        <p className="experience-description">{exp.description}</p>
        <div className="experience-skills">
          {exp.skills.map((skill, i) => (
            <span className="skill-tag" key={i}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Experience;
