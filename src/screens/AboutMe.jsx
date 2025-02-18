import React, { useEffect, useMemo, useRef, useState } from 'react';
import colors from '../config/colors';
import img from '../assets/pixelart2.png';
import Typed from 'typed.js';

const AboutMe = () => {
  const el = useRef(null);
  const targetRefImg = useRef(null);
  const targetRefDesc = useRef(null);
  const [isImgVisible, setIsImgVisible] = useState(null);
  const [isDescVisible, setIsDescVisible] = useState(null);

  const imageCbObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsImgVisible((prev) => prev ?? true);
      }
    });
  };

  const descCbObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsDescVisible((prev) => prev ?? true);
      }
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Traveler', 'Developer', 'Musician', 'Problem Solver', 'Gamer'],
      startDelay: 300,
      typeSpeed: 155,
      backDelay: 150,
      backSpeed: 100,
      showCursor: false,
      smartBackspace: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(imageCbObserver, options);

    const currentImageTarget = targetRefImg.current;

    if (currentImageTarget) imageObserver.observe(currentImageTarget);

    return () => {
      if (currentImageTarget) imageObserver.unobserve(currentImageTarget);
    };
  }, [targetRefImg, options]);

  useEffect(() => {
    const descObserver = new IntersectionObserver(descCbObserver, options);
    const currentDescTarget = targetRefDesc.current;

    if (currentDescTarget) descObserver.observe(currentDescTarget);

    return () => {
      if (currentDescTarget) descObserver.unobserve(currentDescTarget);
    };
  }, [targetRefDesc, options]);

  return (
    <section className="about-root" id="about">
      <div className={`about-left-ctn ${!isImgVisible ? 'about-hidden' : 'fade-in'}`} ref={targetRefImg}>
        <div className="hero-img-ctn">
          <img src={img} alt="myself" />
        </div>
      </div>
      <div className={`about-right-ctn ${!isDescVisible ? 'about-slide' : 'slide-in'}`} ref={targetRefDesc}>
        <h1 className="about-me-header " data-about-me="heading">
          {'About Me'.split('').map((char, index) => (
            <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </h1>
        <div className="typed-container" data-about-me="typed">
          <p className="typed-section">
            {'>'} <span ref={el}></span>
          </p>
        </div>
        <div className="about-description" data-about-me="description">
          Hi! I’m Matthieu , a French software engineer that enjoys creating functional web and mobile apps! Currently,
          I am having fun learning game development on the side of my job as a Salesforce commerce cloud backend
          software engineer <br />
          <br /> By now, I’ve lived and studied in{' '}
          <span style={{ color: colors.fandagoPink, fontWeight: 500 }}>5 different countries</span> (USA, France, UK,
          Poland, and Russia), which has shaped me into someone who thrives in diverse, multicultural environments.{' '}
          <br />
          <br />
          I’m naturally curious, detail-oriented, and always excited to learn something new. Whether it’s tackling
          ambitious projects, solving complex problems, or just geeking out over the latest tech, I enjoy collaborating
          with passionate people who bring fresh ideas to the table.
          <br />
          <br />
          Some of the technologies I’ve worked with:
          <ul className="skills-list" data-about-me="skills">
            <li>Javascript (ES6+)</li>
            <li>React </li>
            <li>React Native </li>
            <li>SFCC</li>
            <li>Node.Js</li>
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
