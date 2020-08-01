import React from "react";
import "./EndGame.css";

const EndGame = (props) => {
  const { message, handleNewGame, handleResetGame } = props;

  return (
    <div className="GameEnd">
      <div className="MessageContainer">
        {message}
        <div className="ButtonContainer">
          <button className="Button" type="button" onClick={handleNewGame}>
            Yes
          </button>
          <button className="Button" type="button" onClick={handleResetGame}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
