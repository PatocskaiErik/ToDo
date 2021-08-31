import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
     <header>
       <h1>ToDo</h1>
     </header>
     <Form todos={ todos } setTodos={ setTodos } setInputText={setInputText}/>
     <ToDoList />
     </div>
  )
}

export default App;
