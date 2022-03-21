import React from "react";

import Square from "../square/Square";

const Board = ({ squares, onClick }) => (
  <div data-testid="board" className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
