import React, { createContext, useState, useEffect } from 'react';


// Define theme configurations
const themes = {
    light: {
      background: '#ffffff',
      text: '#000000',
      primary: '#3498db',
      secondary: '#2ecc71'
    },
    dark: {
      background: '#121212',
      text: '#ffffff',
      primary: '#2980b9',
      secondary: '#27ae60'
    }
  };

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', themes[theme].background);
    document.documentElement.style.setProperty('--text-color', themes[theme].text);
    document.documentElement.style.setProperty('--primary-color', themes[theme].primary);
    document.documentElement.style.setProperty('--secondary-color', themes[theme].secondary);
    
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
    {children}
  </ThemeContext.Provider>
  );
};