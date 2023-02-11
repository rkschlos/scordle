const GuessesRemaining = (props) => {
  let guessesLeft = 6;
  if (props.hints > props.counter) {
    guessesLeft -= props.hints;
  } else {
    guessesLeft -= props.counter;
  }
  return <div>{guessesLeft}</div>;
};

export default GuessesRemaining;
