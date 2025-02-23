import '../styles/components/DarkModeToggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    // Allow toggling with Enter/Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      className={`toggle-wrapper ${darkMode ? 'toggle-dark' : 'toggle-light'}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={darkMode}
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
      <div className="toggle-knob">{darkMode ? <FaMoon /> : <MdLightMode />}</div>
    </button>
  );
};

export default DarkModeToggle;
