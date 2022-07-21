import changeTheNumber from "./incrementDecrement.js";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    changeTheNumber,
    // changeTheNumber,
// yahan pe sare , separated reducer define karenge


})

export default rootReducer;