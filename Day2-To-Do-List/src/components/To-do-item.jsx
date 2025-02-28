import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;