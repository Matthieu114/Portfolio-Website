import './styles/App.css';
import './styles/LandingPage.css';
import './styles/Projects.css';

import landingPageWave from './assets/svgLandingPage.png';
import colors from './config/colors';

import ReactFullpage from '@fullpage/react-fullpage';
//components
import Section from './components/Section';
//screens
import LandingPage from './screens/LandingPage';
import PersonalProjects from './screens/PersonalProjects';
import AboutMe from './screens/AboutMe';

function App() {
  return (
    <div className='App'>
      <ReactFullpage
        scrollingSpeed={500}
        navigation
        verticalCentered={false}
        easing
        sectionsColor={[colors.white, colors.white, colors.white]}
        scrollOverflow
        normalScrollElements='.project-modal-root'
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
    </div>
  );
}

export default App;
