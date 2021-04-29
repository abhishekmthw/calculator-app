import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import {evaluate} from 'mathjs';
import './common.css';

const Calculator = () => {

    const [display, setDisplay] = useState('');

    const changeDisplay = (value) => {
        if (value === 'C') {
            setDisplay('');
        }
        else if(value === '='){
            setDisplay(evaluate(display));
        }
        else {
            setDisplay(display + value.toString());
        }
    }

    return (
        <div className="calculator">
            <Display display={display} />
            <Keypad display={display} onChange={changeDisplay} />
        </div>
    );
}

export default Calculator;