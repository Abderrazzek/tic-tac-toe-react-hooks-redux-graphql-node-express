import {
  EMPTY_SQUARE,
  SET_CURRENT_BOARD,
  SET_CURRENT_ROUND,
  SET_X_IS_NEXT,
} from "../../constants";

const initialState = {
  currentBoard: Array(9).fill(EMPTY_SQUARE),
  xIsNext: true,
  currentRound: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BOARD:
      return { ...state, currentBoard: action.payload };
    case SET_X_IS_NEXT:
      return { ...state, xIsNext: action.payload };
    case SET_CURRENT_ROUND:
      return { ...state, currentRound: action.payload };
    default:
      return state;
  }
};

export default reducer;
