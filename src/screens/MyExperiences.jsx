import React, { useRef, useMemo, useEffect } from 'react';
import Experience from '../components/Experience';
import { experiences } from '../data/experiences';

const MyExperiences = () => {
  const refs = useRef([]);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('exp-fade-in');
      }
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.2
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [options, refs.current.length]);

  return (
    <section class='work-root' id='experience'>
      <div>
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>f</span>
        <span>e</span>
        <span>s</span>
        <span>s</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
        <span>a</span>
        <span>l</span> <span>E</span>
        <span>x</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>e</span>
        <span>n</span>
        <span>c</span>
        <span>e</span>
      </div>

      <main class='experiences-ctn'>
        {experiences.map((el, key) => {
          return <Experience name={el.name} company={el.company} desc={el.description} location={el.location} img={el.img} skills={el.skills} dur={el.duration} refs={refs} i={key} />;
        })}
      </main>
    </section>
  );
};

export default MyExperiences;
