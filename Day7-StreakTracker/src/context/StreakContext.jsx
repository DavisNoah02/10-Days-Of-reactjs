import React, { createContext, useState, useEffect } from 'react';

export const StreakContext = createContext();

export const StreakProvider = ({ children }) => {
  const [streak, setStreak] = useState(() => {
    const savedStreak = JSON.parse(localStorage.getItem('productivity-streak')) || {
      current: 0,
      longest: 0,
      lastCompletedDate: null
    };
    return savedStreak;
  });

  const updateStreak = (isTaskCompleted) => {
    const today = new Date().toDateString();
    
    setStreak(prevStreak => {
      let newStreak = { ...prevStreak };
      
      if (isTaskCompleted) {
        if (prevStreak.lastCompletedDate !== today) {
          newStreak.current += 1;
          newStreak.longest = Math.max(newStreak.current, prevStreak.longest);
          newStreak.lastCompletedDate = today;
        }
      } else {
        newStreak.current = 0;
      }
      
      return newStreak;
    });
  };

  useEffect(() => {
    localStorage.setItem('productivity-streak', JSON.stringify(streak));
  }, [streak]);

  return (
    <StreakContext.Provider value={{ streak, updateStreak }}>
      {children}
    </StreakContext.Provider>
  );
};