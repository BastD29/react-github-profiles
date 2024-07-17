import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import { GithubInitialStateType, GithubProfileType } from "../../models/github";
import {
  fetchProfilesFailure,
  fetchProfilesStart,
  fetchProfilesSuccess,
} from "./actions";

const initialState: GithubInitialStateType = {
  profiles: null,
  loading: false,
  error: null,
};

export const reducer: Reducer<GithubInitialStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchProfilesStart, (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
        state.error = null;
      })
      .addCase(
        fetchProfilesSuccess,
        (state, action: PayloadAction<GithubProfileType[]>) => {
          state.loading = false;
          state.profiles = action.payload;
        }
      )
      .addCase(fetchProfilesFailure, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
);
