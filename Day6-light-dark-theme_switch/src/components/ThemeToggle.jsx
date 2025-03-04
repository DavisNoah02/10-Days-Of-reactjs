import React, { useContext } from 'react';
import { ThemeContext } from '../useContext/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <button 
          onClick={toggleTheme}
          className={`theme-toggle ${theme}`}
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      );
    };

export default ThemeToggle;