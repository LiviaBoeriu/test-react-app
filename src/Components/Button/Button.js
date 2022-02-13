import React from 'react';
import './Button.css';
import AddIcon from '@mui/icons-material/Add';

// Add disabled function when input is empty
function Button(props) {
    return <button className="button" type="button" onClick={props.handleClick}><AddIcon /></button>
}



export default Button;