import './styles/App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './screens/MainPage';
import PDFViewer from './components/PDFViewer';
import Spotify from './screens/personal_projects/components/Spotify';
import ChatApp from './screens/personal_projects/components/ChatApp';
import DSPSE from './screens/personal_projects/components/DSPSE';
import SpaceRace from './screens/personal_projects/components/SpaceRace';
import ECommerce from './screens/personal_projects/components/Ecommerce';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<PDFViewer />} />
        <Route path="/projects">
          <Route path="spotify-clone" element={<Spotify />} />
          <Route path="chat-app" element={<ChatApp />} />
          <Route path="dspse" element={<DSPSE />} />
          <Route path="space-race" element={<SpaceRace />} />
          <Route path="e-commerce" element={<ECommerce />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
