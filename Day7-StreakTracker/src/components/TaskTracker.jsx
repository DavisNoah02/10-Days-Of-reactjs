import React, { useState, useContext } from 'react';
import { StreakContext } from '../context/StreakContext';

const TaskTracker = () => {
  const [task, setTask] = useState('');
  const { updateStreak } = useContext(StreakContext);

  const handleTaskComplete = () => {
    if (task.trim()) {
      updateStreak(true);
      setTask('');
    }
  };

  return (
    <div className="task-tracker">
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
      <button onClick={handleTaskComplete}>
        Complete Task
      </button>
    </div>
  );
};

export default TaskTracker;