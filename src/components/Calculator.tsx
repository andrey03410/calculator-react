import React, {useState} from 'react';
import "./styles.css"
import CalcButton, {ButtonType} from "./CalcButton";
import Input from "./Input";


const Calculator = () => {
    let [val, setVal] = useState("");
    return (
        <div className="calculator">
            <input className='panel' disabled value={val}/>
            <div>
                <CalcButton value={"7"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"8"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"9"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"+"} type={ButtonType.operation} val={val} setVal={setVal} />
            </div>
            <div>
                <CalcButton value={"4"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"5"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"6"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"-"} type={ButtonType.operation} val={val} setVal={setVal} />
            </div>
            <div>
                <CalcButton value={"1"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"2"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"3"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"*"} type={ButtonType.operation} val={val} setVal={setVal} />
            </div>
            <div>
                <CalcButton value={"C"} type={ButtonType.action} val={val} setVal={setVal} />
                <CalcButton value={"0"} type={ButtonType.numeric} val={val} setVal={setVal} />
                <CalcButton value={"="} type={ButtonType.action} val={val} setVal={setVal} />
                <CalcButton value={"/"} type={ButtonType.operation} val={val} setVal={setVal} />
            </div>
        </div>
    );
};

export default Calculator;

