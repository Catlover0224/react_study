import { createAction, handleActions } from "redux-actions";

// type생성
const CLICKBUTTON = "font/CLICKBUTTON";
const INSERTINPUT = "font/INSERTINPUT";

// action 생성
export const clickbutton = createAction(CLICKBUTTON);
export const insertinput = createAction(INSERTINPUT);

// initialState
const initialState = {
    fontSize: '1rem',
};
// reducer 생성
const font = handleActions({
    [CLICKBUTTON]: (state, action) => ({fontSize : action.payload}),
    [INSERTINPUT]: (state, action) => ({fontSize : action.payload}),
}, initialState);

// reducer 내보내기

export default font