import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import home from '../../../assets/space-race/home.png';
import game1 from '../../../assets/space-race/game1.png';
import game2 from '../../../assets/space-race/game2.png';
import game3 from '../../../assets/space-race/game3.png';

const skills = [
  {
    name: 'Lua',
  },
  { name: 'Love2D' },
  { name: 'OOP' },
];

const SpaceRace = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const skillRefs = useRef([]);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.3,
    };
  }, []);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-side');
      } else {
        entry.target.classList.remove('fade-side');
      }
    });
  };

  useEffect(() => {
    const titleObserver = new IntersectionObserver(callbackFunction, options);
    const title = titleRef.current;

    if (title) titleObserver.observe(title);

    return () => {
      if (title) titleObserver.unobserve(title);
    };
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentRefs = skillRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [options, skillRefs.current.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="spotify-root">
      <TbArrowBackUp className="back-arrow" onClick={() => navigate(-1)} />

      <section>
        <div className="category">Game Development</div>
        <div className="title" ref={titleRef}>
          Space Race Game
        </div>
        <div className="about">
          This game is a small reproduction of the classic space race game developped by ATARI. It supports two players
          and randomly generates asteroids that go at varying speeds. A player must avoid the asteroids to not get
          destroyed and manage to cross the map. Everytime a player manages to go to the end of the map while dodging
          the asteroids he gets a point. The player with the most points at the end of the countdown wins. <br />
          <br />
          The game logic and objects were developed in Lua and use the Love2d framework for the display.
        </div>
        <div className="project-skills">
          <div>
            {skills.map((skill, index) => {
              return (
                <div
                  className="skill"
                  ref={(element) => {
                    skillRefs.current[index] = element;
                  }}
                >
                  {skill.name}
                </div>
              );
            })}
          </div>

          <a href="https://github.com/Matthieu114/Space-Race-Game" target={'_blank'} rel="noreferrer">
            {' '}
            <span>→</span>see the code
          </a>
        </div>
      </section>
      <section>
        <div className="project-img-ctn">
          <img src={home} alt="game-home" loading="lazy" />
          <img src={game1} alt="game-0" loading="lazy" />
          <img src={game2} alt="game-1" loading="lazy" />
          <img src={game3} alt="game-3" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default SpaceRace;
