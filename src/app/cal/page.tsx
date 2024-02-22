"use client"
import { useState } from 'react';
import { add, subtract, multiply, divide } from './calculator';

const CalculatorPage = () => {
  const [result, setResult] = useState<number | string>('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('');

  const handleCalculate = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    try {
      switch (operation) {
        case 'add':
          setResult(add(num1, num2));
          break;
        case 'subtract':
          setResult(subtract(num1, num2));
          break;
        case 'multiply':
          setResult(multiply(num1, num2));
          break;
        case 'divide':
          setResult(divide(num1, num2));
          break;
        default:
          setResult('Invalid operation');
      }
    } catch (error) {
      setResult((error as Error).message);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="text"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Number 2"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="">Select Operation</option>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default CalculatorPage;
