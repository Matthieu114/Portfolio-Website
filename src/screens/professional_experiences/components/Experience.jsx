import React, { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';

const Experience = ({ name, company, desc, location, img, skills, dur, refs, index, alt }) => {
  const myRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
    if (myRef) {
      myRef.current.classList.toggle('project-slide-in');
      myRef.current.classList.toggle('accordion-margin');
    }
    setIsActive(!isActive);
  };

  return (
    <section
      className="exp-outer-ctn"
      ref={(element) => {
        refs.current[index] = element;
      }}
    >
      <div className={`exp-inner-ctn ${isActive && 'work-active'}`} onClick={toggleAccordion}>
        <div className="exp-title">
          {' '}
          {name} {' // '}
          <b>{company}</b>
        </div>
        <div className="exp-date">
          <span>{dur}</span>
          <div className="plus-minus"> {!isActive ? '+' : '-'} </div>
        </div>
      </div>

      <div className="accordion-wrap project-slide-in" ref={myRef}>
        <section>
          <div className="work-left-ctn">
            <div className="work-about">
              <MdLocationPin className="location" />
              <div>{location}</div>
            </div>
            <div className="work-desc">{desc}</div>
            <div className="work-skills">
              {skills?.map((skill) => {
                return (
                  <div className="skill" key={skill.id}>
                    {skill.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="work-right-ctn">
            <img src={img} alt={alt} loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
