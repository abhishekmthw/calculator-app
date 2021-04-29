import React from 'react';
import Button from './Button';
import './common.css';

const Keypad = (props) => {
    
    const keys = [7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'/','='];

    return (
        <div className="keypad">
            {keys.map(el => <Button key={el} value={el} onChange={props.onChange} display={props.display}>{el}</Button>)}
        </div>
    );
}

export default Keypad;