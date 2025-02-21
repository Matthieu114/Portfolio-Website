import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import main from '../../../assets/ecommerce/main.png';
import browse from '../../../assets/ecommerce/browse.png';
import admin from '../../../assets/ecommerce/admin.png';
import seemore from '../../../assets/ecommerce/seemore.png';
import addauction from '../../../assets/ecommerce/addauction.png';

const skills = [
  {
    name: 'Javascript',
  },
  { name: 'PHP' },
  { name: 'SQL' },
  { name: 'CSS' },
];

const ECommerce = () => {
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
        <div className="category">Web Development</div>
        <div className="title" ref={titleRef}>
          E-Commerce App
        </div>
        <div className="about">
          The aim of this project was to build an application where users could buy or sell items across an auction. A
          user can create an account (Buyer or Seller) and then log in. He can browse the items for sale and/or put up
          items for sale. A user can bid on an item or buy it instatly if there is a buy now option. A seller can also
          edit his items for sale. Admins can manage all items and offers in the store. A User will have access to his
          bids , items for sale and information in the profile section. <br /> <br />
          The frontend of this application was donne with HTML CSS and Javascript and the server side logic was done in
          PHP. The backend logic was entirely made in SQL
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

          <a href="https://github.com/Matthieu114/Ecommerce-Website" target={'_blank'} rel="noreferrer">
            {' '}
            <span>→</span>see the code
          </a>
        </div>
      </section>
      <section>
        <div className="project-img-ctn">
          <img loading="lazy" src={main} alt="game-home" />
          <img loading="lazy" src={browse} alt="game-home" />
          <img loading="lazy" src={seemore} alt="game-home" />
          <img loading="lazy" src={addauction} alt="game-home" />
          <img loading="lazy" src={admin} alt="game-home" />
        </div>
      </section>
    </div>
  );
};

export default ECommerce;
