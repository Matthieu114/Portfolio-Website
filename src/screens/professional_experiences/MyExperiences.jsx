import React, { useRef, useEffect, useMemo } from 'react';
import { experiences } from '../../data/experiences';
import Experience from './components/Experience';

const MyExperiences = () => {
  // Refs for intersection observer
  const titleRef = useRef(null);
  const cardRefs = useRef([]); // store each card reference

  // Intersection Observer callback
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  };

  // Memoized observer options
  const observerOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const currentTitleRef = titleRef.current;
    // Observe the title
    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    const currentCardRefs = cardRefs.current;
    // Observe each card
    currentCardRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      currentCardRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [observerOptions]);

  return (
    <section className="experience-root" id="experience">
      <h1 className="experience-title" ref={titleRef}>
        <span className="experience-title-normal">My Work</span>{' '}
        {'Experience'.split('').map((char, index) => (
          <span className="experience-title-animate" key={`experience-title-span-${index}`}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <Experience exp={exp} index={index} ref={(el) => (cardRefs.current[index] = el)} />
        ))}
      </div>
    </section>
  );
};

export default MyExperiences;
