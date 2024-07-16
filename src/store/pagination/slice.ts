import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import { PaginationStateType } from "../../models/pagination";
import { setCurrentPage, setTotalPages } from "./actions";

const initialState: PaginationStateType = {
  currentPage: 1,
  totalPages: 10,
};

export const reducer: Reducer<PaginationStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setCurrentPage, (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
      })
      .addCase(setTotalPages, (state, action: PayloadAction<number>) => {
        state.totalPages = action.payload;
      });
  }
);
