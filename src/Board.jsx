import { useState } from "react";
import GuessInput from "./GuessInput";
import HintButton from "./HintButton";

//handler is a function to write to check
//function checkGuess(guess, answer, handler) {}

// eslint-disable-next-line no-unused-vars
const Board = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  //[targetAnswer, setTargetAnswer] = useState("Beethoven");
  const [guessCount, setGuessCount] = useState(0);
  const [hintCount, setHintCount] = useState(1);
  const winningAnswers = {
    1: "beethoven",
    2: "mozart",
    3: "tchaikovsky",
  };
  const [currentGame, setCurrentGame] = useState(
    Math.ceil(Math.random(Object.keys(winningAnswers).length) + 1)
  );

  console.log(currentGame);
  console.log(Object.keys(winningAnswers).length);

  function handleClick() {
    setGuessCount(guessCount + 1);
    const correctAnswer = winningAnswers[currentGame];
    if (currentGuess.toLowerCase() === correctAnswer) {
      console.log("WINNER");
    } else {
      console.log("TRY AGAIN");
    }
  }

  const gamesPlayed = [currentGame];
  const gamesLeft = Object.keys(winningAnswers).filter(
    (item) => item !== currentGame
  );

  function pickGame() {
    const randomIndex = Math.random(gamesLeft.length()) + 1;
    const game = gamesLeft[randomIndex];
    setCurrentGame(game);
    gamesPlayed.append(game);
  }

  return (
    <div className="row">
      <HintButton onClick={() => setHintCount(hintCount + 1)}></HintButton>
      <div className="column">
        {[1, 2, 3, 4, 5].map((i) => {
          if (i < hintCount) {
            return (
              <img
                key={i}
                alt="new measure of score"
                src={`./images/${winningAnswers[currentGame]}/${i}.png`}
              />
            );
          } else {
            return (
              <img
                key={i}
                alt="?"
                src="./images/question.png"
                style={{ width: 208, height: 208 }}
              />
            );
          }
        })}
      </div>

      <GuessInput setCurrentGuess={setCurrentGuess} onClick={handleClick} />
    </div>
  );
};

export default Board;
