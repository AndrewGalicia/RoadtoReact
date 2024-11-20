import * as React from 'react';
import {useState} from "react"
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [newTodo, setNewTodo] = useState("")
  
  return (
    
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
     

    </div> )
      }



export default App;