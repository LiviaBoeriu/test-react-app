import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddToDo from './Components/AddToDo/AddToDo';
import ToDoList from './Components/ToDoList/ToDoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                { id: 1, text: 'I am a to do', isDone: false },
                { id: 2, text: 'I am another to do', isDone: false }
            ],
        }

        this.addToDo = this.addToDo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.completeToDo = this.completeToDo.bind(this);
    }

    // Add a new to do items to the to do list in state
    addToDo(item) {
        this.setState(prevState => {
            const todoList = prevState.toDoList
            return {
                toDoList: [
                    ...todoList,
                    {
                        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
                        text: item,
                        isDone: false
                    }
                ]
            }
        })
    }

    // Delete a todo from the state using the id
    deleteTodo(id) {
        this.setState(prevState => {
            let todoList = prevState.toDoList
            const index = todoList.findIndex((todo) => todo.id === id);
            todoList.splice(index, 1);
            return {
                toDoList: todoList
            }
        })
    }

    // Set state of todo to completed
    completeToDo(id) {
        this.setState(prevState => {
            let todoList = prevState.toDoList
            const index = todoList.findIndex((todo) => todo.id === id);
            if (todoList[index].isDone) {
                todoList[index].isDone = false;
            } else {
                todoList[index].isDone = true;
            }
            return {
                toDoList: todoList
            }
        })
    }

    render() {
        return (
            <div className='main-div'>
                <AddToDo addToDo={this.addToDo} />
                <ToDoList items={this.state.toDoList} deleteTodo={this.deleteTodo} completeToDo={this.completeToDo} />
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
