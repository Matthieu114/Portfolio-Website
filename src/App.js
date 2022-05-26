import './styles/App.css';
import './styles/LandingPage.css';
import './styles/Projects.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import colors from './config/colors';

import ReactFullpage from '@fullpage/react-fullpage';
//components
import Section from './components/Section';
//screens
import LandingPage from './screens/LandingPage';
import PersonalProjects from './screens/PersonalProjects';
import AboutMe from './screens/AboutMe';
import WebProjects from './screens/projects/WebProjects';
import MobileProjects from './screens/projects/MobileProjects';
import GamingProjects from './screens/projects/GamingProjects';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <ReactFullpage
              scrollingSpeed={500}
              verticalCentered={false}
              navigation
              easing
              sectionsColor={[colors.white, colors.white, colors.white]}
              scrollOverflow
              normalScrollElements='.project-modal-root, .projects-outer-container'
              render={({ state, fullpageApi }) => {
                return (
                  <div>
                    <Section content={<LandingPage fullpageApi={fullpageApi} />} />
                    <Section content={<PersonalProjects fullpageApi={fullpageApi} />} />
                    <Section content={<AboutMe />} />
                    <Section content={'Contact form'} />
                  </div>
                );
              }}
            />
          }
        />
        <Route path='/gamedev' element={<GamingProjects />} />
        <Route path='/mobiledev' element={<MobileProjects />} />
        <Route path='/webdev' element={<WebProjects />} />
      </Routes>
    </div>
  );
}

export default App;
