const StartGameButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Start a new game!</button>
    </div>
  );
};

export default StartGameButton;
