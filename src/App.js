import './styles/App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainPage from './screens/MainPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
