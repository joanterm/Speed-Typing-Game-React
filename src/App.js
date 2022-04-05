import './App.css';
import useHook from './useHook';


const App = () => {
  const {
    inputValue, 
    countdownTimer, 
    isCountingDown, 
    displayWordCount, 
    inputFocus, 
    handleInputChange,
    startGameEachTime         
} = useHook()

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


