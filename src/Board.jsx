import { useState } from "react";
import GuessInput from "./GuessInput";
import HintButton from "./HintButton";

//handler is a function to write to check
//function checkGuess(guess, answer, handler) {}

const Board = (props) => {
  const [currentGuess, setCurrentGuess] = useState("");
  //[targetAnswer, setTargetAnswer] = useState("Beethoven");
  const [guessCount, setGuessCount] = useState(0);
  const [hintCount, setHintCount] = useState(1);

  function handleClick() {
    setGuessCount(guessCount + 1);
    if (currentGuess === "Beethoven") {
      console.log("WINNER");
    }
  }

  return (
    <div className="row">
      <HintButton onClick={() => setHintCount(hintCount + 1)}></HintButton>
      <div className="column">
        {[1, 2, 3, 4, 5].map((i) => {
          if (i < hintCount) {
            return <img src={`./images/Beet5_img${i}.png`} />;
          } else {
            return (
              <img
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
