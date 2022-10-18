import React, { useState } from 'react';
import Experience from '../components/Experience';
import { experiences } from '../data/experiences';

const MyExperiences = () => {
  return (
    <section class='work-root' id='experience'>
      <div>Professional Experience</div>

      <main class='experiences-ctn'>
        {experiences.map((el) => {
          return <Experience name={el.name} company={el.company} desc={el.description} location={el.location} img={el.img} skills={el.skills} dur={el.duration} />;
        })}
      </main>
    </section>
  );
};

export default MyExperiences;
