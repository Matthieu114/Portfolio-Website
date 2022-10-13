import './styles/App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

import MainPage from './screens/MainPage';

function App() {
  return (
    <div className='App'>
      <AnimatedCursor
        color='105,25,255'
        innerSize={6}
        outerSize={30}
        innerScale={1.2}
        outerScale={1.2}
        outerAlpha={0}
        trailingSpeed={3}
        outerStyle={{
          border: '1px solid var(--fandagoPink)'
        }}
      />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
