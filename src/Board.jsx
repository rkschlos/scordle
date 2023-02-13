import { useState } from "react";
import GuessInput from "./GuessInput";
import GuessesRemaining from "./GuessesRemaining";

const Board = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [hintCount, setHintCount] = useState(0);
  const winningAnswers = props.winningAnswers;

  function handleGuessClick() {
    setGuessCount(guessCount + 1);
    const correctAnswer = winningAnswers[props.currentGame];
    if (currentGuess.toLowerCase() === correctAnswer) {
      props.setGameStatus("WINNER");
    } else if (
      currentGuess.toLowerCase() !== correctAnswer &&
      guessCount === 4
    ) {
      props.setGameStatus("LOSER");
    } else if (currentGuess.toLowerCase() !== correctAnswer && guessCount < 5) {
      handleHintClick();
    }
    setCurrentGuess("");
  }

  function handleHintClick() {
    setGuessCount(guessCount + 1);
    setHintCount(hintCount + 1);
  }

  return (
    <div className="board-container">
      <GuessesRemaining
        counter={guessCount}
        hints={hintCount}
      ></GuessesRemaining>
      <div className="score-container">
        {[0, 1, 2, 3, 4].map((i) => {
          if (i <= hintCount) {
            return (
              <img
                className="measure-img"
                key={`score${i}`}
                alt="new measure of score"
                src={`./images/${winningAnswers[props.currentGame]}/${
                  i + 1
                }.png`}
              />
            );
          } else {
            return (
              <img
                key={`question${i}`}
                alt="?"
                src="./images/question.png"
                style={{ width: 208, height: 208 }}
              />
            );
          }
        })}
      </div>
      <GuessInput
        setCurrentGuess={setCurrentGuess}
        currentGuess={currentGuess}
        onClick={handleGuessClick}
      />
    </div>
  );
};

export default Board;
