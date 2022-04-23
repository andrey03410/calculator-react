import React from 'react';
import CalcButton, {ButtonType} from "./components/CalcButton";
import Calculator from "./components/Calculator";

function App() {
  return (
      <div className="wrapper">
          <Calculator/>
        {/*<div>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
        </div>
        <div>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
        </div>
        <div>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
          <CalcButton value={"1"} type={ButtonType.numeric}/>
        </div>*/}
      </div>

  );
}

export default App;
