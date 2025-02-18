import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import video from '../../assets/spotify-clone/recording.mov';

const skills = [
  {
    name: 'React'
  },
  { name: 'Javascript' },
  { name: 'Tailwind CSS' },
  { name: 'NodeJS / Express' },
  { name: 'Spotify Web Api' },
  { name: 'Web Playback SDK' }
];

const Spotify = () => {
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
    <div className='spotify-root'>
      <TbArrowBackUp className='back-arrow' onClick={() => navigate(-1)} />

      <section>
        <div className='category'>Web Development</div>
        <div className='title' ref={titleRef}>
          Spotify Clone
        </div>
        <div className='about'>
          This project's aim was to replicate the{' '}
          <a href='https://open.spotify.com/search' target={'_blank'} rel='noreferrer'>
            Spotify web player
          </a>
          . It allows a user to authenticate through OAuth2 using the Spotify Web Api. The users songs, playlists, albums and
          more are then dynamically fetched and displayed in a fully responsive interface. A user can <span>play</span>,{' '}
          <span>pause</span>, <span>skip forwards</span>, or <span>skip backwards</span>, to a song in a playlist or an album
          thanks to the client side JS library Web Playback SDK .
        </div>
        <div className='project-skills'>
          <div>
            {skills.map((skill, index) => {
              return (
                <div
                  className='skill'
                  ref={(element) => {
                    skillRefs.current[index] = element;
                  }}
                >
                  {skill.name}
                </div>
              );
            })}
          </div>

          <a href='https://github.com/Matthieu114/Spotify-Clone' target={'_blank'} rel='noreferrer'>
            {' '}
            <span>→</span>see the code
          </a>
        </div>
      </section>
      <section>
        <div className='project-img-ctn'>
          <video src={video} className='video' type='video/mov' controls muted loading='lazy' />
        </div>
      </section>
    </div>
  );
};

export default Spotify;
