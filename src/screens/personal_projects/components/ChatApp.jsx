import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import home from '../../../assets/chat-app/home.png';
import channelInfo from '../../../assets/chat-app/channel-info.png';
import createChannel from '../../../assets/chat-app/create-channel.png';
import addUser from '../../../assets/chat-app/add-user.png';

const skills = [
  {
    name: 'React',
  },
  { name: 'Javascript' },
  { name: 'CSS3' },
  { name: 'NodeJS / Express' },
  { name: 'Dex' },
  { name: 'React MUI' },
];

const ChatApp = () => {
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
          Chat App
        </div>
        <div className="about">
          This chat app was a school project developed in pairs. It integrated OAuth2 authentication with Dex and used
          ExpressJS and NodeJs as a backend. The frontend was fully done using React and the Material Icons library.{' '}
          <br /> <br /> A user can create an account or log in through OAuth with Github. He then has access to channels
          that he can create delete or modify the users inside. Messages can be sent only (but not received so far) and
          they will display in the selected chanel. A user can also search for Channels and modify his avatar and user
          information.
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

          <a href="https://github.com/Matthieu114/React-Chat-App" target={'_blank'} rel="noreferrer">
            {' '}
            <span>→</span>see the code
          </a>
        </div>
      </section>
      <section>
        <div className="project-img-ctn">
          <img src={home} alt="channel-home" loading="lazy" />
          <img src={createChannel} alt="create-channel" loading="lazy" />
          <img src={channelInfo} alt="channel-info" loading="lazy" />
          <img src={addUser} alt="add-user" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default ChatApp;
