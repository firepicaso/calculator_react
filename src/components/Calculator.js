import React, { useState } from 'react';
import CalculatorButtons from './CalculatorButtons';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({});

  const clickButtons = (label) => {
    const newCalculation = calculate(calculation, label);
    setCalculation(newCalculation);
  };

  return (
    <div className="calculator">
      <div className="display">{calculation.next || calculation.total || '0'}</div>
      <div className="button-row">
        <CalculatorButtons label="AC" onClick={() => clickButtons('AC')} />
        <CalculatorButtons label="+/-" onClick={() => clickButtons('+/-')} />
        <CalculatorButtons label="%" onClick={() => clickButtons('%')} />
        <CalculatorButtons label="÷" onClick={() => clickButtons('÷')} />
      </div>
      <div className="button-row">
        <CalculatorButtons label="7" onClick={() => clickButtons('7')} />
        <CalculatorButtons label="8" onClick={() => clickButtons('8')} />
        <CalculatorButtons label="9" onClick={() => clickButtons('9')} />
        <CalculatorButtons label="x" onClick={() => clickButtons('x')} />
      </div>
      <div className="button-row">
        <CalculatorButtons label="4" onClick={() => clickButtons('4')} />
        <CalculatorButtons label="5" onClick={() => clickButtons('5')} />
        <CalculatorButtons label="6" onClick={() => clickButtons('6')} />
        <CalculatorButtons label="-" onClick={() => clickButtons('-')} />
      </div>
      <div className="button-row">
        <CalculatorButtons label="1" onClick={() => clickButtons('1')} />
        <CalculatorButtons label="2" onClick={() => clickButtons('2')} />
        <CalculatorButtons label="3" onClick={() => clickButtons('3')} />
        <CalculatorButtons label="+" onClick={() => clickButtons('+')} />
      </div>
      <div className="button-row bottom-row">
        <CalculatorButtons label="0" onClick={() => clickButtons('0')} />
        <CalculatorButtons label="." className="narrow" onClick={() => clickButtons('.')} />
        <CalculatorButtons label="=" className="narrow" onClick={() => clickButtons('=')} />
      </div>
    </div>
  );
}

export default Calculator;
