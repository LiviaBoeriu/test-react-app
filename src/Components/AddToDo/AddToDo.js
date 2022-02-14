import React from 'react';
import Button from '../Button/Button';
import CurrentDate from '../CurrentDate/CurrentDate';
import './AddToDo.css';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleClick() {
        if (!this.state.value.length) {
            console.log('Upps you must have text')
        } else {
            this.props.addToDo(this.state.value);
            this.setState({ value: '' });
        }
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.props.addToDo(this.state.value);
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div className='add-box'>
                <CurrentDate />
                <div className="enter-box">
                    <input type="text" id="addToDo" name="addToDo" placeholder='Add a new to do' value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                    <Button className="add-button" handleClick={this.handleClick} />
                </div>
            </div>
        )
    }
}

export default AddToDo;