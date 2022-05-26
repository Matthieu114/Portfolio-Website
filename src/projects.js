import joystick from './assets/game-controller.png';
import web from './assets/programming.png';
import mobile from './assets/iphone.png';
import colors from './config/colors';

const descripStyle = { color: colors.fandagoPink, fontWeight: '600' };

const Projects = [
  {
    id: 1,
    src: joystick,
    title: 'Game Development',
    description: (
      <p>
        Games made with Unity. Programming languages used: <span style={descripStyle}>Lua / C#</span>
      </p>
    ),
    path: '/gamedev'
  },
  {
    id: 2,
    src: web,
    title: 'Web Development',
    description: (
      <p>
        My computer web app projects. Programming languages used: <span style={descripStyle}>Javascript ES6 ( React.js)</span>
      </p>
    ),
    path: '/webdev'
  },
  {
    id: 3,
    src: mobile,
    title: 'Mobile Development',
    description: (
      <p>
        Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
      </p>
    ),
    path: 'mobiledev'
  }
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // },
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // },
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // },
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // },
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // },
  // {
  //   id: 3,
  //   src: mobile,
  //   title: 'Mobile Development',
  //   description: (
  //     <p>
  //       Mobile apps I made Programming languages used: <span style={descripStyle}>Javascript ES6 (React Native, Expo)</span>
  //     </p>
  //   )
  // }
];

export default Projects;
