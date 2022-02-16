import React from 'react';
import Button from '../Button/Button';
import CurrentDate from '../CurrentDate/CurrentDate';
import './AddToDo.css';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isError: false
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    // On change assign the input value to the state
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    // Function to add a new to do to the list
    handleClick() {
        if (!this.state.value) {
            this.setState({ isError: true })
        } else {
            this.props.addToDo(this.state.value);
            this.setState({ value: '' });
        }
    }

    handleKeyUp(e) {
        if (e.keyCode !== 13) {
            if (e.target.value) {
                this.setState({ isError: false })
            } else {
                this.setState({ isError: true })
            }
        } else {
            if (!e.target.value) {
                this.setState({ isError: true })
            } else {
                this.props.addToDo(this.state.value);
                this.setState({
                    value: ''
                });
            }
        }
    }

    render() {
        return (
            <div className='add-box'>
                <CurrentDate />
                <div className="enter-box">
                    <input
                        type="text"
                        id="addToDo"
                        name="addToDo"
                        placeholder='Add a new to do'
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                    />
                    <Button className='add-button' handleClick={this.handleClick} />
                </div>
                <p className={`feedback ${this.state.isError ? 'show' : ''}`}>Field is empty</p>
            </div>
        )
    }
}

export default AddToDo;