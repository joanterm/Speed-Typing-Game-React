import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")

  //HANDLES INPUT CHANGE
  const handleInputChange = (e) => {
    const {value} = e.target
    setInputValue(value)
  }
  console.log(inputValue)

  //REMOVES WHITESPACE IF USER PRESSES SPACE ON KEYBOARD, SPLITS A STRING INTO AN ARRAY, RETURNS 0 IF THERE ARE NO WORDS TYPED IN
  const calculateWordCount = (word) => {
    if (word === "") {
      return 0
    } else {
      return word.trim().split(" ").length
    }
    //OR:
    // const wordArray = word.trim().split(" ")
    // return wordArray.filter(eachWord => eachWord !== "").length
  }

  return (
    <div>
      <h1>TITLE</h1>
      <textarea 
          value={inputValue}
          onChange={handleInputChange}
      /> 
      <h4>Time remaining: </h4>
      <button onClick={() => console.log(calculateWordCount(inputValue))}>Start Game</button>
      <h1>Total amount of word you typed: </h1>
    </div>
  );
}

export default App;


