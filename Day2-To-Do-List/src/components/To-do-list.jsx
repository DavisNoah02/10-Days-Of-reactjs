import React, { useState, useEffect } from 'react';
import TodoItem from './To-do-item';
import TodoForm from './To-do-form';

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };
  
  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  
  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <div className="todo-items">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;