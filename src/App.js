import './styles/App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './screens/MainPage';
import PDFViewer from './components/PDFViewer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/resume' element={<PDFViewer />} />
      </Routes>
    </div>
  );
}

export default App;
