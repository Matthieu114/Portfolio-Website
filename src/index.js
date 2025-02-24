import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
