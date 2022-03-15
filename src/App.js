import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [countdownTimer, setCountdownTimer] = useState(5)

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

  useEffect(() => {
    setTimeout(() => {
      if (countdownTimer !== 0) {
        setCountdownTimer((prev) => {
          return prev - 1
        })
      }  
    }, 1000)
  }, [countdownTimer])

  return (
    <div>
      <h1>TITLE</h1>
      <textarea 
          value={inputValue}
          onChange={handleInputChange}
      /> 
      <h4>Time remaining: {countdownTimer}</h4>
      <button onClick={() => console.log(calculateWordCount(inputValue))}>Start Game</button>
      <h1>Total amount of word you typed: </h1>
    </div>
  );
}

export default App;


