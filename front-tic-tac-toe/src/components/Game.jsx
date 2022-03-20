import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import React from "react";

import { CONTINUE_PLAYING, EMPTY_SQUARE } from "../constants";
import { calculateWinner } from "../services/ApiServices";
import * as actions from "../store/actions/gameAction";
import Board from "./Board";

const Game = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { currentBoard, xIsNext, currentRound } = state.game;
  const { setCurrentBoard, setCurrentRound, setXisNext } = bindActionCreators(
    actions,
    dispatch
  );
  const { loading, error, data } = useQuery(calculateWinner, {
    variables: { board: currentBoard, round: currentRound },
  });
  const gameState = data && data.calculateWinner ? data.calculateWinner : "";
  const currentPlayer = xIsNext ? "X" : "O";

  const handleClick = (clickedSquare) => {
    const board = [...currentBoard];
    // return if won or occupied
    if (gameState !== CONTINUE_PLAYING || board[clickedSquare] !== EMPTY_SQUARE)
      return;
    // select square
    board[clickedSquare] = currentPlayer;
    setCurrentRound(currentRound + 1);
    setCurrentBoard(board);
    setXisNext(!xIsNext);
  };

  const startNewGame = () => {
    // reseting the board
    setCurrentBoard(Array(9).fill(EMPTY_SQUARE));
    setCurrentRound(0);
    setXisNext(true);
  };

  return (
    <div className={`page-container ${loading ? "opacity" : ""}`}>
      {error ? (
        <>
          <div className="large-text">Oops</div>
          <div className="sub-large-text">Something went wrong</div>
        </>
      ) : (
        <>
          {loading ? <div className="loader"></div> : <></>}
          <div className="container">
            <h1>Tic Tac Toe</h1>
            <hr />
            <div className="subtitle">
              <span>
                {gameState !== CONTINUE_PLAYING && !loading
                  ? gameState
                  : "Next Player : "}
              </span>
              {
                <span className="O bold">
                  {gameState === CONTINUE_PLAYING ? (xIsNext ? "X" : "O") : ""}
                </span>
              }
            </div>
            <Board squares={currentBoard} onClick={handleClick} />
            <div className="bottom-wrapper">
              <button onClick={startNewGame}>New Game</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
