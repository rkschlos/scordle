const GuessesRemaining = (props) => {
  let guessesLeft = 5;
  if (props.hints > props.counter) {
    guessesLeft -= props.hints;
  } else {
    guessesLeft -= props.counter;
  }
  return (
    <div className="guesses-remaining">
      {guessesLeft > 1
        ? `You have ${guessesLeft} guesses left!`
        : `You have ${guessesLeft} guess left!`}
    </div>
  );
};

export default GuessesRemaining;
