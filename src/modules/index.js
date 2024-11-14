import { combineReducers } from "redux";
import font from "./font";
import count from "./count";
import route from "./route";

const rootReduer = combineReducers({
    count,
    font,
    route,
});

export default rootReduer;