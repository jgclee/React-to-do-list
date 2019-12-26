import React, { useState } from 'react';
import TodoList from './TodoList'
function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <div>
      <TodoList todos={ todos } />
      <input type='text' />
      <button>Add a to do item</button>
      <button>Clear completed to do items</button>
      <div>0 items left to do</div>
    </div>
  )
}

export default App;
