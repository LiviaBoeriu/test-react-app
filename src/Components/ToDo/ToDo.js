import React from 'react';
import './todo.css';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDo(props) {
    return (
        <li className={`todo ${props.data.isDone ? 'is-done' : ''}`}>
            <button className='todo-button' onClick={() => { props.deleteTodo(props.data.id) }}><DeleteIcon /></button>
            <label className='todo-text' htmlFor={props.data.id}>{props.data.text}</label>
            <input type="checkbox" id={props.data.id} name="todo-checkbox" value="value" onChange={() => { props.completeToDo(props.data.id) }} />
        </li>
    )
}

export default ToDo;