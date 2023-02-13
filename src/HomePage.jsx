import { useState } from "react";
import Board from "./Board";
import StartGameButton from "./StartGameButton";
import randomNumber from "./utils";
import { winningAnswers } from "./constants";

const HomePage = () => {
  //game statuses can be "NEW", "IN_PROGRESS", "WINNER", "LOSER"
  const [gameStatus, setGameStatus] = useState("NEW");
  const [currentGame, setCurrentGame] = useState();
  const [gamesPlayed, setGamesPlayed] = useState([]);
  const numberOfGamesPossible = Object.keys(winningAnswers).length;

  // This function picks the next game to play, making sure not to repeat past games
  function pickNewGame() {
    const newGamesPlayed = [...gamesPlayed, currentGame];
    setGamesPlayed(newGamesPlayed);
    const gamesLeft = Object.keys(winningAnswers).filter(
      (answer) => !newGamesPlayed.includes(answer)
    );
    const randomGameIndex = randomNumber(gamesLeft.length) - 1;
    const game = gamesLeft[randomGameIndex];
    setCurrentGame(game);
  }

  //This function checks to see if the user is on the last game available
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
          winningAnswer={winningAnswers[currentGame]}
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
