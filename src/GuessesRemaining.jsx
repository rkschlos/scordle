const GuessesRemaining = (props) => {
  let guessesLeft = 5;
  guessesLeft -= props.counter;
  return (
    <div className="guesses-remaining">
      {guessesLeft > 1
        ? `You have ${guessesLeft} guesses left!`
        : `You have ${guessesLeft} guess left!`}
    </div>
  );
};

export default GuessesRemaining;
