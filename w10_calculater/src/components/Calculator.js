import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputVaule, setInputvalue] = useState("0");

  const display = (value) => {
    if (inputVaule.toString().charAt(0) === "0") {
      setInputvalue(value);
    } else {
      setInputvalue(inputVaule + value);
    }
  };

  const reset = () => {
    setInputvalue("0");
  };
  
  const calculate = () => {
    // eslint-disable-next-line
    let result = eval(inputVaule);
    setInputvalue(result);
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <h1>{inputVaule}</h1>
      </div>
      <div className="calculator-button">
        <button className="operator" onClick={() => display("+")}>
          +
        </button>
        <button className="operator" onClick={() => display("-")}>
          -
        </button>
        <button className="operator" onClick={() => display("*")}>
          x
        </button>
        <button className="operator" onClick={() => display("/")}>
          ÷
        </button>
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={() => display("0")}>0</button>
        <button className="clear-btn" onClick={reset}>
          C
        </button>
        <button className="equal operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
