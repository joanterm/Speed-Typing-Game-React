import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    const {value} = e.target
    setInputValue(value)
  }
  console.log(inputValue)

  return (
    <div>
      <h1>TITLE</h1>
      <textarea 
          value={inputValue}
          onChange={handleInputChange}
      /> 
      <h4>Time remaining: </h4>
      <button>Start Game</button>
      <h1>Total amount of word you typed: </h1>
    </div>
  );
}

export default App;


