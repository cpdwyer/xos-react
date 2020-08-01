const isMatch = (x, y, z) => x === y && y === z;

const checkRowsForWin = (board) => {
  for (let i = 0; i < 3; i++) {
    const row = board[i];

    if (row[0]) {
      if (isMatch(row[0], row[1], row[2])) {
        return true;
      }
    }
  }
  return false;
};

const checkColumnsForWin = (board) => {
  const a = board[0];
  const b = board[1];
  const c = board[2];
  for (let i = 0; i < 3; i++) {
    if (a[i]) {
      if (isMatch(a[i], b[i], c[i])) {
        return true;
      }
    }
  }

  return false;
};

const checkDiagsForWin = (board) => {
  const a = board[0];
  const b = board[1];
  const c = board[2];

  return (
    (a[0] && isMatch(a[0], b[1], c[2])) || (a[2] && isMatch(a[2], b[1], c[0]))
  );
};

const checkForWin = (board) => {
  return (
    checkRowsForWin(board) ||
    checkColumnsForWin(board) ||
    checkDiagsForWin(board)
  );
};

export default checkForWin;
