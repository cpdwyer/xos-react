import React from "react";

import "./ScoreBoard.css";

const ScoreBoard = (props) => {
  const { history } = props;

  const games = [];
  let OCounter = 0;
  let XCounter = 0;
  history.forEach((str) => {
    if (str === "O") {
      OCounter += 1;
      games.push(["✓", "✗"]);
    } else if (str === "X") {
      XCounter += 1;
      games.push(["✗", "✓"]);
    } else {
      games.push(["-", "-"]);
    }
  });

  return (
    <div className="History">
      <div className="HistoryTitle">
        <h2>Game History</h2>
      </div>
      <div className="HistoryRow HistoryBottomBorder">
        <div className="HistoryBox HistoryBorderRight">
          <p className="Counters">No.</p>
        </div>
        <div className="HistoryBox HistoryBorderRight">
          <p className="Counters">O</p>
        </div>
        <div className="HistoryBox">
          <p className="Counters">X</p>
        </div>
      </div>
      <div>
        {games.map((arr, i) => (
          <div key={i} className="HistoryRow">
            <div className="HistoryBox HistoryBorderRight">
              <p className="Score">{i + 1}</p>
            </div>
            <div className="HistoryBox HistoryBorderRight">
              <p className="Score">{arr[0]}</p>
            </div>
            <div className="HistoryBox">
              <p className="Score">{arr[1]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="HistoryRow HistoryBottomBorder">
        <div className="HistoryBox HistoryBorderRight"></div>
        <div className="HistoryBox HistoryBorderRight"></div>
        <div className="HistoryBox"></div>
      </div>
      <div className="HistoryRow HistoryBottomBorder">
        <div className="HistoryBox HistoryBorderRight">
          <p className="Counters">Total</p>
        </div>
        <div className="HistoryBox HistoryBorderRight">
          <p className="Counters">{OCounter}</p>
        </div>
        <div className="HistoryBox">
          <p className="Counters">{XCounter}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
