import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import { GithubProfileType } from "../../models/github";
import { addFavorite, removeFavorite } from "./actions";

type FavoritesInitialStateType = {
  favorites: GithubProfileType[] | null;
};

const initialState: FavoritesInitialStateType = {
  favorites: null,
};

export const reducer: Reducer<FavoritesInitialStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(
        addFavorite,
        (state, action: PayloadAction<GithubProfileType>) => {
          if (state.favorites) {
            state.favorites.push(action.payload);
          } else {
            state.favorites = [action.payload];
          }
        }
      )
      .addCase(removeFavorite, (state, action: PayloadAction<number>) => {
        if (state.favorites) {
          state.favorites = state.favorites.filter(
            (profile) => profile.id !== action.payload
          );
        }
      });
  }
);
