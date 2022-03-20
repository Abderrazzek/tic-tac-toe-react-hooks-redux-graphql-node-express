import {
  SET_CURRENT_BOARD,
  SET_CURRENT_ROUND,
  SET_X_IS_NEXT,
} from "../../constants";

export const setCurrentBoard = (board) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_BOARD, payload: board });
  };
};

export const setCurrentRound = (currentRound) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT_ROUND, payload: currentRound });
  };
};

export const setXisNext = (xIsNext) => {
  return (dispatch) => {
    dispatch({ type: SET_X_IS_NEXT, payload: xIsNext });
  };
};
