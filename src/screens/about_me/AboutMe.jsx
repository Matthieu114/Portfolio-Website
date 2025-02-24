import React, { useEffect, useMemo, useRef, useState } from 'react';
import Typed from 'typed.js';
import img from '../../assets/photo_smiling.webp';

const AboutMe = () => {
  const typedRef = useRef(null);
  const imgRef = useRef(null);
  const descRef = useRef(null);

  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isDescVisible, setIsDescVisible] = useState(false);

  // Intersection Observer callback for the description
  // Unified observer callback
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Identify which ref was intersected
        if (entry.target === imgRef.current) {
          setIsImgVisible(true);
        }
        if (entry.target === descRef.current) {
          // Slight delay to let the image appear first
          setTimeout(() => setIsDescVisible(true), 200);
        }
      }
    });
  };

  // Intersection Observer options
  const observerOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.1,
    };
  }, []);

  // Initialize typed animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Traveler', 'Developer', 'Musician', 'Problem Solver', 'Gamer'],
      startDelay: 300,
      typeSpeed: 155,
      backDelay: 150,
      backSpeed: 100,
      showCursor: false,
      smartBackspace: true,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    [descRef, imgRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    });
  }, [observerOptions]);

  return (
    <section className="about-root" id="about">
      {/* Left Container (Image) */}
      <div ref={imgRef} className={`about-left-ctn ${isImgVisible ? 'fade-in' : 'about-hidden'}`}>
        <div className="hero-img-ctn">
          <img src={img} alt="myself" loading="lazy" />
        </div>
      </div>

      {/* Right Container (Text) */}
      <div ref={descRef} className={`about-right-ctn ${isDescVisible ? 'slide-in' : 'about-slide'}`}>
        <h1 className="about-me-header" data-about-me="heading">
          <span className="about-me-header-normal">A few things</span>
          {' about me'.split('').map((char, index) => (
            <span className="about-me-header-animate" key={index}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Typed.js Container */}
        <div className="typed-container" data-about-me="typed">
          <p className="typed-section">
            {'>'} <span ref={typedRef} />
          </p>
        </div>

        {/* About Description */}
        <div className="about-description" data-about-me="description">
          Hi! I’m Matthieu, a French software engineer who enjoys creating functional web and mobile apps! Currently,
          I’m learning game development on the side of my job as a Salesforce Commerce Cloud backend engineer.
          <br />
          <br />
          I’ve lived and studied in <span>5 different countries</span> (USA, France, UK, Poland, and Russia), which
          shaped me into someone who thrives in diverse, multicultural environments.
          <br />
          <br />
          I’m naturally curious, detail-oriented, and always excited to learn something new. Whether it’s tackling
          ambitious projects, solving complex problems, or geeking out over the latest tech, I enjoy collaborating with
          passionate people who bring fresh ideas to the table.
          <br />
          <br />
          Some of the technologies I’ve worked with:
          <ul className="skills-list" data-about-me="skills">
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>React Native</li>
            <li>SFCC</li>
            <li>Node.js</li>
            <li>CSS3</li>
            <li>C#</li>
            <li>Cypress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
