import * as React from 'react';

const todoList = [
  {id: 1, title: "buy milk"},
  {id: 2, title: "wash car"},
  {id: 3, title: "walk dog"},
  
]

function App() {
  
  return (
    
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map(todoList => (
          <li key={todoList.id}>{todoList.id}</li>,
          <li>{todoList.title}</li>
        ) )}


      </ul>
  
    </div> );
      }

export default App;