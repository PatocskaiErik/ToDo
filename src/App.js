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
       <h1>Teendők</h1>
     </header>
     <Form inputText={ inputText } todos={ todos } setTodos={ setTodos } setInputText={ setInputText }/>
     <ToDoList todos={ todos }/>
     </div>
  )
}

export default App;
