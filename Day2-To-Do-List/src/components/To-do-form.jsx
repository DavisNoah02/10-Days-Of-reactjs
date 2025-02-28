import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}

export default TodoForm;