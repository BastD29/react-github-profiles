import { combineReducers } from "@reduxjs/toolkit";
import { reducer as githubReducer } from "./github/slice2";
// import { githubReducer } from "./github";

export default combineReducers({
  github: githubReducer,
});
