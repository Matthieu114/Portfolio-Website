import React, { useRef, useState } from 'react';
import { MdLocationPin } from 'react-icons/md';

const Experience = ({ name, company, desc, location, img, skills, dur, refs, i }) => {
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
      class='exp-outer-ctn'
      ref={(element) => {
        refs.current[i] = element;
      }}>
      <div class={`exp-inner-ctn ${isActive && 'work-active'}`} onClick={toggleAccordion}>
        <div class='exp-title'>
          {' '}
          {name} {' // '}
          <b>{company}</b>
        </div>
        <div class='exp-date'>
          <span>{dur}</span>
          <div class='plus-minus'> {!isActive ? '+' : '-'} </div>
        </div>
      </div>

      <div class='accordion-wrap project-slide-in' ref={myRef}>
        <section>
          <div className='work-left-ctn'>
            <div className='work-about'>
              <MdLocationPin class='location' />
              <div>{location}</div>
            </div>
            <div className='work-desc'>{desc}</div>
            <div className='work-skills'>
              {skills?.map((skill) => {
                return <div className='skill'>{skill}</div>;
              })}
            </div>
          </div>
          <div className='work-right-ctn'>
            <img src={img} alt='' />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;
