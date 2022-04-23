import React from 'react';

interface IInput{
    value: string
}

const Input = ({value}: IInput) => {
    return (
        <div>
            <input type="text" className="panel" disabled value={value}/>
        </div>
    );
};


export default Input;
