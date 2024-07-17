import { combineReducers } from "@reduxjs/toolkit";
import { reducer as githubReducer } from "./github/slice";
import { reducer as favoritesReducer } from "./favorites/slice";
import { reducer as filterReducer } from "./filter/slice";
import { reducer as paginationReducer } from "./pagination/slice";

export default combineReducers({
  github: githubReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
  pagination: paginationReducer,
});
