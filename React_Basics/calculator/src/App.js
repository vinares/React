import React from 'react';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const resultRef = useRef(null);
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);



  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number
      (inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => 0);
  }



  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input 
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
          />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>times</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>result result</button>

      </form>

    </div>
  );
}

export default App;
