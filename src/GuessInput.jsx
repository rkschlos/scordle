const GuessInput = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    props.onClick(e);
  }
  return (
    <div>
      <form>
        <label htmlFor="guess">
          <input
            value={props.currentGuess}
            onChange={(e) => {
              props.setCurrentGuess(e.target.value);
            }}
            placeholder="Enter Guess"
            type="text"
          ></input>
          <button onClick={handleSubmit} type="submit">
            Guess/Next Hint
          </button>
        </label>
      </form>
    </div>
  );
};
export default GuessInput;
