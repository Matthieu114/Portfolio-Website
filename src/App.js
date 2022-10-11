import './styles/App.css';
import './styles/LandingPage.css';
import './styles/Projects.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './screens/MainPage';
import WebProjects from './screens/projects/WebProjects';
import MobileProjects from './screens/projects/MobileProjects';
import GamingProjects from './screens/projects/GamingProjects';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/gamedev' element={<GamingProjects />} />
        <Route path='/mobiledev' element={<MobileProjects />} />
        <Route path='/webdev' element={<WebProjects />} />
      </Routes>
    </div>
  );
}

export default App;
