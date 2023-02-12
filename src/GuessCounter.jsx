const GuessesRemaining = (props) => {
  let guessesLeft = 5;
  if (props.hints > props.counter) {
    guessesLeft -= props.hints;
  } else {
    guessesLeft -= props.counter;
  }
  return <div>{guessesLeft}</div>;
};

export default GuessesRemaining;
