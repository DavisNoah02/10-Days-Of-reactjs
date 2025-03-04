// src/App.js
import React from 'react';
import { ThemeProvider } from './useContext/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css'; 

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Toggle Example</h1>
        <ThemeToggle />
        {/* Rest of your app content */}
      </div>
    </ThemeProvider>
  );
}

export default App;
