import React, { useContext } from 'react';
import { StreakContext } from '../context/StreakContext';

const StreakDisplay = () => {
  const { streak } = useContext(StreakContext);

  return (
    <div className="streak-display">
      <h2>Productivity Streak</h2>
      <div className="streak-info">
        <p>Current Streak: {streak.current} days</p>
        <p>Longest Streak: {streak.longest} days</p>
      </div>
    </div>
  );
};

export default StreakDisplay;