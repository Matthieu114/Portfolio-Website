import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import video from '../../assets/spotify-clone/recording.mov';

const Spotify = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class='spotify-root'>
      <TbArrowBackUp className='back-arrow' onClick={() => navigate(-1)} />

      <section>
        <div className='category'>Web development</div>
        <div className='title' ref={titleRef}>
          Spotify Clone
        </div>
        <div className='about'>
          This project's aim was to replicate the{' '}
          <a href='https://open.spotify.com/search' target={'_blank'} rel='noreferrer'>
            Spotify web player
          </a>
          . It allows a user to authenticate through OAuth2 using the Spotify Web Api. The users songs, playlists, albums and more are then dynamically fetched and displayed in a fully responsive
          interface. A user can <span>play</span>, <span>pause</span>, <span>skip forwards</span>, or <span>skip backwards</span>, to a song in a playlist or an album thanks to the client side JS
          library Web Playback SDK .
        </div>
        <div className='project-skills'>
          <div className='skill'>React</div>
          <div className='skill'>Javascript</div>
          <div className='skill'>Tailwind CSS</div>
          <div className='skill'>NodeJS / Express</div>
          <div className='skill'>Spotify Web Api</div>
          <div className='skill'>Web Playback SDK</div>
        </div>
      </section>
      <section>
        <div className='project-img-ctn'>
          <video src={video} className='video' type='video/mov' controls muted preload='metadata' />
          <p>
            Want to take a deeper look ?{' '}
            <a href='https://github.com/Matthieu114/Spotify-Clone' target={'_blank'} rel='noreferrer'>
              {' '}
              see the code
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Spotify;
