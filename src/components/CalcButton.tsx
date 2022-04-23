import React, {useState} from 'react';
import "./styles.css"
import Input from "./Input";

export enum ButtonType{
    numeric,
    operation,
    action
}


interface CalcButtonProps{
    value: string;
    type: ButtonType;
    val : string
    setVal:  React.Dispatch<React.SetStateAction<string>>
}

function calc(str: string){
    let i = 0;
    let operand1 = '';
    let operand2 = '';
    let operation = '';
    if (str[i] == '-') { // обработка отрицательного числа
        operand1 += '-';
        i++;
    }
    let isFirst = true;
    for (i; i < str.length; ++i) {
        if (str[i] == '+' || str[i] == '-' || str[i] == '/' || str[i] == '*') {
            operation = str[i];
            isFirst = false;
            continue;
        }
        if (isFirst) {
            operand1 += str[i];
        } else {
            operand2 += str[i];
        }
    }
    switch (operation) {
        case '+':
            return Number(operand1) + Number(operand2);
        case '-':
            return Number(operand1) - Number(operand2);
        case '/':
            return Number(operand1) / Number(operand2);
        case '*':
            return Number(operand1) * Number(operand2);
        case '':
            return Number(operand1);
    }
}

const CalcButton : React.FC<CalcButtonProps> = ({value, type, val, setVal}: CalcButtonProps) => {
    return (
        <button className="button" onClick={() => {
            if(type === ButtonType.action){
                if(value === "C"){
                    val = '';
                }
                if(value === "="){
                    val = String(calc(val));
                }
            }
            else {
                val += value;
            }
            setVal(val);
        }}>{value}</button>
    );
};

export default CalcButton;