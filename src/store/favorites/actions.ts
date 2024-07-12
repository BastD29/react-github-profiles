import { createAction } from "@reduxjs/toolkit";
import { GithubProfileType } from "../../models/github";

const addFavorite = createAction<GithubProfileType>("favorites/addFavorite");
const removeFavorite = createAction<number>("favorites/removeFavorite");

export { addFavorite, removeFavorite };
