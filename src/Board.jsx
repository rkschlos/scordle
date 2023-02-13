import { useState } from "react";
import GuessInput from "./GuessInput";
import GuessesRemaining from "./GuessesRemaining";

const Board = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const winningAnswer = props.winningAnswer;

  function handleGuessClick() {
    setGuessCount(guessCount + 1);

    if (currentGuess.toLowerCase() === winningAnswer) {
      props.setGameStatus("WINNER");
    } else if (
      currentGuess.toLowerCase() !== winningAnswer &&
      guessCount === 4
    ) {
      props.setGameStatus("LOSER");
    } else if (currentGuess.toLowerCase() !== winningAnswer && guessCount < 5) {
      setGuessCount(guessCount + 1);
    }
    setCurrentGuess("");
  }

  return (
    <div className="board-container">
      <GuessesRemaining counter={guessCount}></GuessesRemaining>
      <div className="score-container">
        {[0, 1, 2, 3, 4].map((i) => {
          if (i <= guessCount) {
            return (
              <img
                className="measure-img"
                key={`score${i}`}
                alt="new measure of score"
                src={`./images/${winningAnswer}/${i + 1}.png`}
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
