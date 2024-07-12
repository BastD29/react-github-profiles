import { combineReducers } from "@reduxjs/toolkit";
import { reducer as githubReducer } from "./github/slice2";
import { reducer as favoritesReducer } from "./favorites/slice";
// import { githubReducer } from "./github";

export default combineReducers({
  github: githubReducer,
  favorites: favoritesReducer,
});
