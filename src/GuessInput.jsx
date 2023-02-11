const GuessInput = (props) => {
  return (
    <div>
      <label htmlFor="guess">
        <input
          value={props.currentGuess}
          onChange={(e) => {
            props.setCurrentGuess(e.target.value);
          }}
          placeholder="Enter Guess"
          type="text"
        ></input>
        <button onClick={props.onClick}>Guess/Next Hint</button>
      </label>
    </div>
  );
};
export default GuessInput;
