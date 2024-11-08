import { createAction, handleActions } from "redux-actions";

// type
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//state 초기화
const initialState = {
  number: 0,
};

// reducer 생성
const count = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + Number(action.payload)}),
    [DECREASE]: (state, action) => ({ number: state.number - Number(action.payload)}),
  }, initialState
);

export default count;
