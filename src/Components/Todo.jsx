import React from 'react';
import ToDoList from './TodoList';

const Todo = ({ text, setTodos, todos, todo}) =>{
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return(
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className="completed-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
        </div>


    );
}
export default Todo;