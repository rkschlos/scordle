import { useState } from "react";
import Board from "./Board";
import StartGameButton from "./StartGameButton";
import randomNumber from "./utils";

const HomePage = (props) => {
  const [gameStatus, setGameStatus] = useState("NEW");

  const winningAnswers = {
    1: "beethoven",
    2: "mozart",
    3: "tchaikovsky",
  };
  const [currentGame, setCurrentGame] = useState();
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const numberOfGamesPossible = Object.keys(winningAnswers).length;

  function pickNewGame() {
    const newGamesPlayed = [...gamesPlayed, currentGame];
    setGamesPlayed(newGamesPlayed);
    const gamesLeft = Object.keys(winningAnswers).filter(
      (answer) => !newGamesPlayed.includes(answer)
    );
    const randomGameIndex = randomNumber(gamesLeft.length) - 1;
    console.log(randomGameIndex);
    const game = gamesLeft[randomGameIndex];
    console.log(gamesLeft);
    setCurrentGame(game);
  }

  function checkIfFinishedLastGame() {
    return gamesPlayed.length == numberOfGamesPossible;
  }

  return (
    <div>
      <header>
        <h1 className="title">Scordle!</h1>
        <br></br>
        <h2 className="description">Guess the composer</h2>
      </header>
      {gameStatus === "IN_PROGRESS" ? (
        <Board
          currentGame={currentGame}
          setGameStatus={setGameStatus}
          winningAnswers={winningAnswers}
        ></Board>
      ) : null}
      {gameStatus === "NEW" ? (
        <div>
          <StartGameButton
            onClick={() => {
              pickNewGame();
              setGameStatus("IN_PROGRESS");
            }}
          ></StartGameButton>
        </div>
      ) : null}

      {gameStatus === "WINNER" ? (
        <div>
          WINNER
          {checkIfFinishedLastGame() == false ? (
            <StartGameButton
              onClick={() => {
                pickNewGame();
                setGameStatus("IN_PROGRESS");
              }}
            ></StartGameButton>
          ) : (
            <div>Congrats, you have played all the possible games!</div>
          )}
        </div>
      ) : null}
      {gameStatus === "LOSER" ? (
        <div>
          BETTER LUCK NEXT TIME! The answer was:{" "}
          {winningAnswers[currentGame].toUpperCase()}
          {checkIfFinishedLastGame() == false ? (
            <StartGameButton
              onClick={() => {
                pickNewGame();
                setGameStatus("IN_PROGRESS");
              }}
            ></StartGameButton>
          ) : (
            <div>Congrats, you have played all the possible games!</div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
