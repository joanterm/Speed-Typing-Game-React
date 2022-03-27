import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [countdownTimer, setCountdownTimer] = useState(2)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [displayWordCount, setDisplayWordCount] = useState(0)
  const inputFocus = useRef(null)

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

  const startGameEachTime = () => {
    //NEED TO DISABLE FIRST AS SETISCOUNTING DOWN IS DISABLED WHEN !isCountingDown ON TEXT AREA
    inputFocus.current.disabled = false
    inputFocus.current.focus()
    setIsCountingDown(true)
    calculateWordCount(inputValue)
    setCountdownTimer(2)
    setInputValue("")
    setDisplayWordCount(0)
  }

  const endGame = () => {
    setIsCountingDown(false)
    const numberOfWords = calculateWordCount(inputValue)
    setDisplayWordCount(numberOfWords)
  }

  //SETS EFFFECT SO COUNTDOWN GOES DOWN EACH SECOND AND STOPS AT 0 AFTER THE BUTTON IS CLICKED, ALLOWS FOR DISPLAY OF COUNTED WORDS
  useEffect(() => {
      if (isCountingDown && countdownTimer !== 0) {
        setTimeout(() => {
          setCountdownTimer((prev) => {
            return prev - 1
        })
      }, 1000)
      } else if (countdownTimer === 0){
        endGame()
      }  
  }, [countdownTimer, isCountingDown])

  return (
    <div>
      <h1>TITLE</h1>
      <textarea 
          value={inputValue}
          onChange={handleInputChange}
          disabled={!isCountingDown}
          ref={inputFocus}
      /> 
      <h4>Time remaining: {countdownTimer}</h4>
      <button onClick={startGameEachTime} disabled={isCountingDown}>Start Game</button>
      <h1>Total amount of word you typed: {displayWordCount}</h1>
    </div>
  );
}

export default App;


