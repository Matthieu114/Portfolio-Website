import spotifyImg from '../assets/spotify.jpg';
import chatApp from '../assets/chat-app.png';
import dspse from '../assets/dspse.png';
import spacerace from '../assets/spacerace.png';
import ecomm from '../assets/e-commerce.png';

export const projects = [
  {
    id: 1,
    name: 'Spotify clone',
    category: 'web',
    description: 'made using spotify API, React, Node.js, and spotify web SDK',
    img: spotifyImg,
    path: '/projects/spotify-clone'
  },
  {
    id: 2,
    name: 'Chat app',
    category: 'web',
    description: 'Messenger like chat app made with React and Dex for Oauth',
    img: chatApp,
    path: '/projects/chat-app'
  },
  {
    id: 3,
    name: 'DSPE',
    category: 'mobile',
    description: "React native app for kitesurfer's security. Uses weather and google maps API. Firebase for back-end",
    img: dspse,
    path: '/projects/DSPE'
  },
  {
    id: 4,
    name: 'Space race',
    category: 'game',
    description: 'Space race classic atari game made using Lua and Love2D framework',
    img: spacerace,
    path: '/projects/space-race'
  },
  {
    id: 5,
    name: 'Ecommerce web app',
    category: 'web',
    description: 'E-commerce style website made using JS (ES6) , PHP and SQL for back-end',
    img: ecomm,
    path: '/projects/e-commerce'
  }
];
