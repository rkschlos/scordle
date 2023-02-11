import { useState } from "react";
import Board from "./Board";
import StartGameButton from "./StartGameButton";

const HomePage = (props) => {
  const [gameStatus, setGameStatus] = useState("NEW");

  //statuses: new game, in progress, win, lose

  return (
    <div>
      <h1>Scordle!</h1>
      <h2>Guess the composer</h2>
      {gameStatus === "IN_PROGRESS" ? (
        <Board setGameStatus={setGameStatus}></Board>
      ) : null}
      {gameStatus === "NEW" ? (
        <div>
          <StartGameButton
            onClick={() => setGameStatus("IN_PROGRESS")}
          ></StartGameButton>
        </div>
      ) : null}
      {gameStatus === "WINNER" ? (
        <div>
          WINNER
          <StartGameButton
            onClick={() => setGameStatus("IN_PROGRESS")}
          ></StartGameButton>
        </div>
      ) : null}
      {gameStatus === "LOSER" ? (
        <div>
          BETTER LUCK NEXT TIME
          <StartGameButton
            onClick={() => setGameStatus("IN_PROGRESS")}
          ></StartGameButton>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
