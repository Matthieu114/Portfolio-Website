import spotifyImg from '../assets/projects-page/spotify.jpg';
import chatApp from '../assets/projects-page/chat-app.png';
import dspse from '../assets/projects-page/dspse.jpg';
import spacerace from '../assets/projects-page/games.jpg';
// import ecomm from '../assets/projects-page/e-commerce.jpg';

export const projects = [
  {
    id: 1,
    name: 'Spotify clone',
    category: 'web',
    description: 'Made using Spotify API, React, Node.js, and Spotify Web SDK.',
    img: spotifyImg,
    alt: 'Spotify clone project screenshot',
    path: '/projects/spotify-clone'
  },
  {
    id: 2,
    name: 'Chat app',
    category: 'web',
    description: 'Messenger-like chat app made with React and Dex for OAuth.',
    img: chatApp,
    alt: 'Chat app project screenshot',
    path: '/projects/chat-app'
  },
  {
    id: 3,
    name: 'DSPSE',
    category: 'mobile',
    description: "React Native app for kitesurfer's security. Uses Weather and Google Maps API. Firebase for back-end.",
    img: dspse,
    alt: 'DSPSE mobile app screenshot',
    path: '/projects/dspse'
  },
  {
    id: 4,
    name: 'Space race',
    category: 'game',
    description: 'Space Race classic Atari game made using Lua and Love2D framework.',
    img: spacerace,
    alt: 'Space Race game project screenshot',
    path: '/projects/space-race'
  }
  // {
  //   id: 5,
  //   name: 'Ecommerce web app',
  //   category: 'web',
  //   description: 'E-commerce style website made using JS (ES6), PHP, and SQL for the back-end.',
  //   img: ecomm,
  //   alt: 'E-commerce web app project screenshot',
  //   path: '/projects/e-commerce'
  // }
];
