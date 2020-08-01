import React from "react";
import X from "../PlayerIndicators/X";
import O from "../PlayerIndicators/O";
import "./Board.css";

const indexToRow = (i) => {
  switch (i) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    default:
      return "";
  }
};

const Board = (props) => {
  const { board, onChange } = props;

  return (
    <div className="Board">
      {board.map((row, rowIndex) => {
        const r = indexToRow(rowIndex);
        return (
          <div key={r} className="Row">
            {row.map((value, columnIndex) => {
              const boxRef = `${r}${columnIndex}`;
              let boxClasses = `Box ${boxRef}`;
              let contents = <div />;
              if (value === "X") {
                contents = <X />;
              }

              if (value === "O") {
                contents = <O />;
              }

              let handleClick = () => onChange(rowIndex, columnIndex);
              if (Boolean(value)) {
                boxClasses += " Disabled";
                handleClick = null;
              }

              return (
                <div
                  key={boxRef}
                  className={boxClasses}
                  role="presentation"
                  onClick={handleClick}
                >
                  {contents}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
