import './styles/App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './screens/MainPage';
import PDFViewer from './components/PDFViewer';
import Spotify from './screens/projects/Spotify';
import ChatApp from './screens/projects/ChatApp';
import DSPSE from './screens/projects/DSPSE';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/resume' element={<PDFViewer />} />
        <Route path='/projects'>
          <Route path='spotify-clone' element={<Spotify />} />
          <Route path='chat-app' element={<ChatApp />} />
          <Route path='dspse' element={<DSPSE />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
