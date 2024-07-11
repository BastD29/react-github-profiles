import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GithubInitialStateType, GithubProfileType } from "../../models/github";

const initialState: GithubInitialStateType = {
  profiles: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "github",
  initialState,
  reducers: {
    fetchProfilesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProfilesSuccess(state, action: PayloadAction<GithubProfileType[]>) {
      state.loading = false;
      state.profiles = action.payload;
    },
    fetchProfilesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
