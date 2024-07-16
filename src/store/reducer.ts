import { combineReducers } from "@reduxjs/toolkit";
import { reducer as githubReducer } from "./github/slice2";
import { reducer as favoritesReducer } from "./favorites/slice";
import { reducer as filterReducer } from "./filter/slice2";
import { reducer as paginationReducer } from "./pagination/slice2";
// import { githubReducer } from "./github";

export default combineReducers({
  github: githubReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
  pagination: paginationReducer,
});
