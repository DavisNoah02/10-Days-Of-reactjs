import React from 'react';
import { StreakProvider } from './context/StreakContext';
import TaskTracker from './components/TaskTracker';
import StreakDisplay from './components/StreakDisplay';
import './App.css';

function App() {
  return (
    <StreakProvider>
      <div className="app">
        <h1>Productivity Tracker</h1>
        <StreakDisplay />
        <TaskTracker />
      </div>
    </StreakProvider>
  );
}

export default App;