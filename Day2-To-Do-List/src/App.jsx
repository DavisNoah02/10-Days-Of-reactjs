import React from 'react';
import TodoList from './components/To-do-list';
import '../src/styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;