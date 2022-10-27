import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import home from '../../assets/dspse/home.png';
import signup from '../../assets/dspse/signup.png';
import weather from '../../assets/dspse/weather.png';
import landing from '../../assets/dspse/landing.png';
import profile from '../../assets/dspse/profile.png';

const skills = [
  {
    name: 'React Native'
  },
  { name: 'Javascript' },
  { name: 'Expo' },
  { name: 'Firebase' },
  { name: 'Weather API' },
  { name: 'Google Maps API' }
];

const DSPSE = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const skillRefs = useRef([]);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px 150px 0px 150px',
      threshold: 0.3
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
  }, [titleRef.current, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [options, skillRefs.current.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class='spotify-root'>
      <TbArrowBackUp className='back-arrow' onClick={() => navigate(-1)} />

      <section>
        <div className='category'>Mobile Development</div>
        <div className='title' ref={titleRef}>
          Kitesurfer Tracking App (DSPSE)
        </div>
        <div className='about'>
          I developed this mobile app for a school project idea that we had with friends. It is intended to be used by kitesurfers to track their position and record their session statistics. <br />
          <br /> A user can signup or can sign in with an existing account and will have his position displayed on google maps. He can choose between displaying satellite or nomal mode. The weather
          portion of the app will display the current weather around him in real time for the next 24 hours. In the profile tab, a user can logout and ask to reset his password. He will receive a
          password reset confirmation by mail
          <br />
          <br />
          The entire frontend of this app has been made using React Native, the backend is connected to Google Firebase which regulates all the signup , signin and password reset features
        </div>
        <div className='project-skills'>
          <div>
            {skills.map((skill, index) => {
              return (
                <div
                  className='skill'
                  ref={(element) => {
                    skillRefs.current[index] = element;
                  }}>
                  {skill.name}
                </div>
              );
            })}
          </div>

          <a href='https://github.com/Matthieu114/DSPSE-APP' target={'_blank'} rel='noreferrer'>
            {' '}
            <span>→</span> see the code
          </a>
        </div>
      </section>
      <section>
        <div className='project-img-ctn-mobile'>
          <img loading='lazy' src={landing} className='mobile' />
          <img loading='lazy' src={signup} className='mobile' />
          <img loading='lazy' src={home} className='mobile' />
          <img loading='lazy' src={weather} className='mobile' />
          <img loading='lazy' src={profile} className='mobile' />
        </div>
      </section>
    </div>
  );
};

export default DSPSE;
