import { useState } from "react";
import GuessInput from "./GuessInput";
import StartGameButton from "./StartGameButton";
import randomNumber from "./utils";
import GuessesRemaining from "./GuessCounter";

//handler is a function to write to check
//function checkGuess(guess, answer, handler) {}

// eslint-disable-next-line no-unused-vars
const Board = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [hintCount, setHintCount] = useState(0);
  const winningAnswers = {
    1: "beethoven",
    2: "mozart",
    3: "tchaikovsky",
  };
  const totalGames = Object.keys(winningAnswers).length;
  const [currentGame, setCurrentGame] = useState(randomNumber(totalGames));
  console.log(currentGame);

  function handleGuessClick() {
    setGuessCount(guessCount + 1);
    const correctAnswer = winningAnswers[currentGame];
    if (currentGuess.toLowerCase() === correctAnswer) {
      props.setGameStatus("WINNER");
    } else if (
      currentGuess.toLowerCase() !== correctAnswer &&
      guessCount === 6
    ) {
      props.setGameStatus("LOSER");
    } else if (currentGuess.toLowerCase() !== correctAnswer && guessCount < 6) {
      handleHintClick();
    }
    setCurrentGuess("");
  }

  function handleHintClick() {
    setGuessCount(guessCount + 1);
    setHintCount(hintCount + 1);
  }

  const gamesPlayed = [currentGame];
  const gamesLeft = Object.keys(winningAnswers).filter(
    (item) => item !== currentGame
  );

  function pickGame() {
    const randomGameIndex = randomNumber(gamesLeft.length);
    const game = gamesLeft[randomGameIndex];
    setCurrentGame(game);
    gamesPlayed.append(game);
  }
  //Show a counter to show how many guesses are left
  //if winner is guessed, show something that says winner, and ask if they want to play again
  //if guess is wrong, show somethign that says "Wrong answer"
  //if hintCount == 6 and a guess is submitted, regardless of win or lose show a button to play a new game
  //When someone clicks show next measure, reduce amount of possible guesses
  return (
    <div className="row">
      <GuessesRemaining
        counter={guessCount}
        hints={hintCount}
      ></GuessesRemaining>
      <div className="column">
        {[0, 1, 2, 3, 4].map((i) => {
          if (i < hintCount) {
            return (
              <img
                key={i}
                alt="new measure of score"
                src={`./images/${winningAnswers[currentGame]}/${i + 1}.png`}
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
      <GuessInput
        setCurrentGuess={setCurrentGuess}
        currentGuess={currentGuess}
        onClick={handleGuessClick}
      />
    </div>
  );
};

export default Board;
