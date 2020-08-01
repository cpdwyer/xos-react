import React from "react";
import X from "../PlayerIndicators/X";
import O from "../PlayerIndicators/O";

import "./TurnIndicator.css";

const TurnIndicator = (props) => {
  const { currentPlayer, gameEnd } = props;

  let value = <div className="EmptyBox" />;

  if (!gameEnd) {
    value = currentPlayer === "X" ? <X /> : <O />;
  }

  return (
    <div>
      <div className="TurnIndicator">
        <h2>Turn</h2>
        {value}
      </div>
    </div>
  );
};

export default TurnIndicator;
