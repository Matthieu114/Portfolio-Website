import qonto from '../assets/Qonto.png';
import meDirect from '../assets/MeDirect.png';
import nrf from '../assets/NRF.png';

export const experiences = [
  {
    id: 1,
    name: 'Frontend Software Engineer Intern',
    company: 'Qonto',
    location: 'Paris, France',
    description: 'Built maintained and helped scale innovative financial features across the Qonto app using the EmberJS Framework in an agile team of 50+ engineers',
    img: qonto,
    skills: ['EmberJs', 'Javascript', 'Git', 'Cypress'],
    duration: 'Apr 2022 - Sept 2022 '
  },
  {
    id: 2,
    name: 'Frontend Web Developer',
    company: 'MeDirect',
    location: 'Sliema, Malta',
    description: 'Helped develop and maintain the test flows of the website using Cypress for E2E testing and Jest / Vue test utils to write unit tests',
    img: meDirect,
    skills: ['Vue', 'Cypress', 'Jest', 'Javascript', 'Git'],
    duration: 'Jun 2021 - Aug 2021'
  },
  {
    id: 3,
    name: 'IT department law firm internship',
    company: 'Norton Rose Fulbright',
    location: 'Paris, France',
    description: 'Discovery of the IT support job , helped small team on their daily tasks',
    img: nrf,
    skills: ['Organisation', 'Excel'],
    duration: 'Dec 2019 - Jan 2020'
  }
];
