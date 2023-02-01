import { createRoot } from "react-dom/client";
import Board from "./Board";

const App = () => {
  return (
    <div>
      <h1>Scordle!</h1>
      <h2>Guess the composer</h2>

      <Board />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
