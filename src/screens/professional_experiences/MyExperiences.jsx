import React, { useRef, useMemo, useEffect } from 'react';
import Experience from './components/Experience';
import { experiences } from '../../data/experiences';

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
      threshold: 0.2,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentRefs = refs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [options, refs.current.length]);

  return (
    <section className="work-root" id="experience">
      <div>
        {'Professional Experience'.split('').map((char, index) => (
          // preserve the space that is lost when splitting
          <span key={'experience-title-span-' + index}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </div>

      <main className="experiences-ctn">
        {experiences.map((el, i) => {
          return (
            <Experience
              name={el.name}
              company={el.company}
              desc={el.description}
              location={el.location}
              img={el.img}
              skills={el.skills}
              dur={el.duration}
              alt={el.alt}
              refs={refs}
              key={'experience-drawer' + i}
              index={i}
            />
          );
        })}
      </main>
    </section>
  );
};

export default MyExperiences;
