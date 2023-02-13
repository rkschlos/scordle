const StartGameButton = (props) => {
  return (
    <div className="start-game-container">
      <button className="start-game-button" onClick={props.onClick}>
        Start a new game!
      </button>
    </div>
  );
};

export default StartGameButton;
