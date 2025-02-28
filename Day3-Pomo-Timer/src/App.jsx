import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  // Constants for time durations (in seconds)
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  // State variables
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [cycles, setCycles] = useState(0);

  // Format time to display as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer effect
  useEffect(() => {
    let timerId = null;
    
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      // When timer reaches zero, switch modes
      const audio = new Audio('https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3');
      audio.play().catch(e => console.log('Audio play error:', e));
      
      if (isWorkMode) {
        // Switch to break mode
        setIsWorkMode(false);
        setTimeLeft(BREAK_TIME);
      } else {
        // Switch to work mode and increment cycle count
        setIsWorkMode(true);
        setTimeLeft(WORK_TIME);
        setCycles(prev => prev + 1);
      }
    }

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isRunning, timeLeft, isWorkMode]);

  // Control handlers
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setIsWorkMode(true);
    setTimeLeft(WORK_TIME);
  };

  return (
    <div className="pomodoro-container">
      <h1>Pomodoro Timer</h1>
      
      <div className="timer-display">
        <div className={`mode-indicator ${isWorkMode ? 'work-mode' : 'break-mode'}`}>
          {isWorkMode ? 'WORK' : 'BREAK'}
        </div>
        <div className="time">{formatTime(timeLeft)}</div>
        <div className="cycles">Completed cycles: {cycles}</div>
      </div>
      
      <div className="controls">
        {!isRunning ? (
          <button className="start-btn" onClick={handleStart}>Start</button>
        ) : (
          <button className="pause-btn" onClick={handlePause}>Pause</button>
        )}
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;