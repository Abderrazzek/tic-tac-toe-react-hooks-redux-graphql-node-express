const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const EMPTY = "";
const LAST_ROUND = 9;

// resolver
module.exports = {
  Query: {
    calculateWinner: (_, args) => {
      let { board, round } = args;
      for (let i = 0; i < winningConditions.length; i++) {
        const [firstSquare, secondSquare, thirdSquare] = winningConditions[i];
        if (
          board[firstSquare] !== EMPTY &&
          board[firstSquare] === board[secondSquare] &&
          board[firstSquare] === board[thirdSquare]
        ) {
          return `Winner is ${board[firstSquare]}`;
        }
      }
      if (round === LAST_ROUND) {
        return "Draw";
      }
      return "CONTINUE_PLAYING";
    },
  },
};
