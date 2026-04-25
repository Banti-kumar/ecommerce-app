import loginReducer from "./Slices/loginSlice/loginSlice";
import registerReducer from "./Slices/loginSlice/registerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
