import React from 'react';
import ToDo from '../ToDo/ToDo.js';
import './ToDoList.css';

class ToDoList extends React.Component {
    render() {
        return (
            <ul className='item-list'>
                {
                    this.props.items.map((item) => {
                        return <ToDo key={item.id} deleteTodo={this.props.deleteTodo} data={item} completeToDo={this.props.completeToDo} />
                    })
                }
            </ul>
        )
    }
}

export default ToDoList;