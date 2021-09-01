import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/TodoList';

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

   useEffect(() =>{
    console.log("valami");
  }, [todos]);

  //Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed' : 
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncomplited':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default: 
        setFilteredTodos(todos);
        break;
    }
  }


  return (
    <div className="App">
     <header>
       <h1>Teendők</h1>
     </header>
     <Form inputText={ inputText } todos={ todos } setTodos={ setTodos } setInputText={ setInputText } setStatus={setStatus}/>
     <ToDoList setTodos={ setTodos }todos={ todos }/>
     </div>
  )
}

export default App;
