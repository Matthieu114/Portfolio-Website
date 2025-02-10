import qonto from '../assets/professionnal-experiences/Qonto.png';
import meDirect from '../assets/professionnal-experiences/MeDirect.png';
import ecocea from '../assets/professionnal-experiences/ecocea_la_fabrique_logo.jpeg';

export const experiences = [
  {
    id: 1,
    name: 'Backend Software Engineer',
    company: 'Ecocea la Fabrique',
    location: 'Paris, France',
    description:
      'Developing and maintaining scalable e-commerce solutions using Salesforce Commerce Cloud (SFCC) and the SFRA architecture. Collaborating with cross-functional teams to optimize backend performance, integrate third-party APIs, and improve code maintainability.',
    img: ecocea, // Replace with the correct image reference
    skills: ['SFCC', 'Agile', 'Javascript', 'Git', 'ISML', 'Business Manager'],
    duration: 'Feb 2023 - Present'
  },
  {
    id: 2,
    name: 'Frontend Software Engineer Intern',
    company: 'Qonto',
    location: 'Paris, France',
    description: 'Built, maintained, and helped scale innovative financial features across the Qonto app using the Ember.js framework in an agile team of 50+ engineers.',
    img: qonto,
    skills: ['Ember.js', 'Javascript', 'Git', 'Cypress'],
    duration: 'Apr 2022 - Sept 2022'
  },
  {
    id: 3,
    name: 'Frontend Web Developer Intern',
    company: 'MeDirect',
    location: 'Sliema, Malta',
    description: 'Helped develop and maintain the test flows of the website using Cypress for E2E testing and Jest / Vue Test Utils for unit tests.',
    img: meDirect,
    skills: ['Vue', 'Cypress', 'Jest', 'Javascript', 'Git'],
    duration: 'Jun 2021 - Aug 2021'
  }
];
