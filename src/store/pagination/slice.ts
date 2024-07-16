import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import { PaginationStateType } from "../../models/pagination";
import { setCurrentPage, setTotalPages } from "./actions";

const initialState: PaginationStateType = {
  pagination: {
    currentPage: 1,
    totalPages: 10,
    limit: 6, // items per page
  },
};

export const reducer: Reducer<PaginationStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setCurrentPage, (state, action: PayloadAction<number>) => {
        state.pagination.currentPage = action.payload;
      })
      .addCase(setTotalPages, (state, action: PayloadAction<number>) => {
        state.pagination.totalPages = action.payload;
      });
  }
);

const getPagination = ({ pagination }: { pagination: PaginationStateType }) =>
  pagination.pagination;

export const selectors = { getPagination };
