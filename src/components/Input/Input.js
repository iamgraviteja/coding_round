import React from 'react';

const Input = (props) => {
    return (
        <div className="form__element">
            <label className="Label">{props.label}</label>
            <input className="Input"
                value={props.value}
                type="text"
                placeholder={props.placeholder}
                onChange={props.changed} />
        </div>
    );
};

export default Input;