import React from 'react';
import './common.css';

const Button = (props) => {
    
    function handleChange() {
        props.onChange(props.value);
    }

    return (
        <button className={`button ${props.value === '=' ? 'equal' : ''}`} key={props.value} value={props.value} onClick={handleChange}>{props.value}</button>
    );
}

export default Button;