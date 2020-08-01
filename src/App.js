import React, { useState } from "react";
import Board from "./components/Board/Board";
import EndGame from "./components/EndGame/EndGame";
import TurnIndicator from "./components/TurnIndicator/TurnIndicator";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

import checkForWin from "./checkForWin";
import "./App.css";

const generateNewBoard = () => {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
};

const firstTurn = () => {
  const f = Math.random();
  const str = f.toString();
  const lastDigit = str.charAt(str.length - 1);
  return parseInt(lastDigit, 10) % 2 === 0 ? "X" : "O";
};

const App = () => {
  const [board, setBoard] = useState(generateNewBoard());
  const [currentPlayer, setCurrentPlayer] = useState(firstTurn());
  const [gameEnd, setGameEnd] = useState(false);
  const [turns, setTurns] = useState(0);
  const [message, setMessage] = useState(<span />);
  const [history, setHistory] = useState([]);

  const handleNewGame = () => {
    setBoard(generateNewBoard());
    setTurns(0);
    setCurrentPlayer(firstTurn());
    setGameEnd(false);
  };

  const handleResetGame = () => {
    setHistory([]);
    handleNewGame();
  };

  const handleSelection = (rowIndex, columnIndex) => {
    const newBoard = [...board];
    const rowToEdit = newBoard[rowIndex];

    rowToEdit.splice(columnIndex, 1, currentPlayer);
    newBoard.splice(rowIndex, 1, rowToEdit);

    setBoard(newBoard);
    const newTurns = turns + 1;
    setTurns(newTurns);

    const winner = checkForWin(newBoard);
    if (winner || newTurns === 9) {
      setMessage(
        winner ? (
          <>
            <h3 className="MessageTitle">Winner!</h3>
            <p className="Message">{`Congratulations ${currentPlayer}`}</p>
            <p className="Message">Play Again?</p>
          </>
        ) : (
          <>
            <h3 className="MessageTitle">Game Over</h3>
            <p className="Message">No winner, better luck next time</p>
            <p className="Message">Play Again?</p>
          </>
        )
      );
      setGameEnd(true);
      setHistory([...history, winner ? currentPlayer : "-"]);
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  return (
    <div className="App">
      <div>
        <div className="BoardContainer">
          <Board board={board} onChange={handleSelection} />
          {gameEnd ? (
            <EndGame
              message={message}
              handleNewGame={handleNewGame}
              handleResetGame={handleResetGame}
            />
          ) : null}
        </div>
      </div>
      <TurnIndicator currentPlayer={currentPlayer} gameEnd={gameEnd} />
      <ScoreBoard history={history} />
    </div>
  );
};

export default App;
