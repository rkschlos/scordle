const GuessInput = (props) => {
  return (
    <div>
      <h3>Enter Guess Here</h3>
      <label htmlFor="guess">
        <input
          onChange={(e) => {
            props.setCurrentGuess(e.target.value);
          }}
          type="text"
        ></input>
        <button onClick={props.onClick}>Submit</button>
      </label>
    </div>
  );
};
export default GuessInput;
