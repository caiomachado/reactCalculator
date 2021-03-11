import React, {useState} from 'react';

import { Container } from './styles';
import {FiDelete, FiBook} from 'react-icons/fi'

const Calculator = () => {
  const [theme, setTheme] = useState('dark');
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  function switchTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  function addValue(e) {
    if (operation !== '') {
      setSecondValue(e.target.innerHTML);  
    }

    if (!firstValue) {
      setResult('')
      setFirstValue(e.target.innerHTML);
    }
    
    if (firstValue && !operation) {
      if (firstValue.length === 18) {
        return;
      } else {
        setFirstValue(firstValue + e.target.innerHTML);
      }
    }

    if (operation && secondValue) {
      if (secondValue.length === 18) {
        return;
      } else {
        setSecondValue(secondValue + e.target.innerHTML);
      }
    }
  }

  function chooseOperator(e) {
    if (!firstValue) {
      return;
    } 
    setOperation(e.target.innerHTML)
  }

  function calculate() {
    switch (operation) {
      case '+':
        setResult(Number(firstValue) + Number(secondValue));
        break;
      case '-':
        setResult(Number(firstValue) - Number(secondValue));
        break;
      case '*':
        setResult(Number(firstValue) * Number(secondValue));
        break;
      case '/':
        setResult(Number(firstValue) / Number(secondValue));
        break;
      default:
        break;
    }
    setFirstValue('')
    setOperation('')
    setSecondValue('')
    return result
  }

  function clearInput() {
    setFirstValue('')
    setOperation('')
    setSecondValue('')
    setResult('')
  }

  function changeValue() {
    if (operation !== '' && secondValue !== '') {
      const secondInputSplitNumbers = [...secondValue]
      if (secondInputSplitNumbers[0] === '-') {
        secondInputSplitNumbers.shift()
      } else {
        secondInputSplitNumbers.unshift('-');
      }
      setSecondValue(secondInputSplitNumbers.join(''));
    }

    if (operation === '' && firstValue !== '') {
      const firstInputSplitNumbers = [...firstValue]
      if (firstInputSplitNumbers[0] === '-') {
        firstInputSplitNumbers.shift()
      } else {
        firstInputSplitNumbers.unshift('-');
      }
      setFirstValue(firstInputSplitNumbers.join(''));
    }
  }
  
  function deleteLastDigit() {
    if (operation !== '' && secondValue !== '') {
      const secondInputSplitNumbers = [...secondValue]
      secondInputSplitNumbers.pop()
      setSecondValue(secondInputSplitNumbers.join(''));
    }

    if (operation === '' && firstValue !== '') {
      const firstInputSplitNumbers = [...firstValue]
      firstInputSplitNumbers.pop()
      setFirstValue(firstInputSplitNumbers.join(''));
    }
  }

  function calculatePercentage() {
    let percentage;
    if (operation !== '' && secondValue !== '') {
      percentage = secondValue / 100;
      setSecondValue(percentage)
    }

    if (operation === '' && firstValue !== '') {
      percentage = firstValue / 100;
      setFirstValue(percentage)
    }
  }

  function calculateSquarePower() {
    let squaredNumber;
    if (operation !== '' && secondValue !== '') {
      squaredNumber = secondValue * secondValue;
      setSecondValue(squaredNumber)
    }

    if (operation === '' && firstValue !== '') {
      squaredNumber = firstValue * firstValue;
      setFirstValue(squaredNumber)
    }
  }

  function calculateCubicPower() {
    let squaredNumber;
    if (operation !== '' && secondValue !== '') {
      squaredNumber = secondValue * secondValue * secondValue;
      setSecondValue(squaredNumber)
    }

    if (operation === '' && firstValue !== '') {
      squaredNumber = firstValue * firstValue * firstValue;
      setFirstValue(squaredNumber)
    }
  }
  
  function calculateSquareRoot() {
    let squaredNumber;
    if (operation !== '' && secondValue !== '') {
      squaredNumber = Math.sqrt(secondValue)
      setSecondValue(squaredNumber)
    }

    if (operation === '' && firstValue !== '') {
      squaredNumber = Math.sqrt(firstValue)
      setFirstValue(squaredNumber)
    }
  }

  return (
    <Container theme={theme}>
      <div className="calculator">
        <div className="screen">
          <p>{firstValue}</p>
          <p>{operation}</p>
          <p>{secondValue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="buttons">
          <div className="theme-row">
            <div className="switch-wrapper">
              <div className="switch" onClick={switchTheme}>
                <button className="lever" />
              </div>
              <p>
                {
                  theme === 'dark' ? (
                    'switch to light theme' 
                  ) : (
                    'switch to dark theme'
                  ) 
                }
              </p>
            </div>
            <div className="value-item"><button><FiBook size={18}/></button></div>
          </div>
          <div className="math-part">
            <div className="values">
            <div className="value-row">
                <div className="value-item yellow"><button onClick={clearInput}>C</button></div>
                <div className="value-item light-yellow"><button onClick={calculateSquareRoot}>√</button></div>
                <div className="value-item light-yellow"><button onClick={calculateCubicPower}>x³</button></div>
              </div>
              <div className="value-row">
                <div className="value-item light-yellow"><button onClick={changeValue}>+/-</button></div>
                <div className="value-item light-yellow"><button onClick={calculatePercentage}>%</button></div>
                <div className="value-item light-yellow"><button onClick={calculateSquarePower}>x²</button></div>
              </div>
              <div className="value-row">
                <div className="value-item"><button onClick={addValue}>7</button></div>
                <div className="value-item"><button onClick={addValue}>8</button></div>
                <div className="value-item"><button onClick={addValue}>9</button></div>
              </div>
              <div className="value-row">
                <div className="value-item"><button onClick={addValue}>4</button></div>
                <div className="value-item"><button onClick={addValue}>5</button></div>
                <div className="value-item"><button onClick={addValue}>6</button></div>
              </div>
              <div className="value-row">
                <div className="value-item"><button onClick={addValue}>1</button></div>
                <div className="value-item"><button onClick={addValue}>2</button></div>
                <div className="value-item"><button onClick={addValue}>3</button></div>
              </div>
              <div className="value-row">
                <div className="value-item"><button onClick={addValue}>.</button></div>
                <div className="value-item"><button onClick={addValue}>0</button></div>
                <div className="value-item"><button onClick={deleteLastDigit}><FiDelete size={18}/></button></div>
              </div>
            </div>
            <div className="operations">
              <div className="value-item"><button onClick={chooseOperator}>*</button></div>
              <div className="value-item"><button onClick={chooseOperator}>/</button></div>
              <div className="value-item"><button onClick={chooseOperator}>-</button></div>
              <div className="value-item"><button onClick={chooseOperator}>+</button></div>
              <div className="value-item large-size"><button onClick={calculate}>=</button></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Calculator;