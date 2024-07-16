import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import {
  PaginationStateType,
  TotalPagesPayloadType,
} from "../../models/pagination";
import { setCurrentPage, setTotalPages } from "./actions";

const initialState: PaginationStateType = {
  pagination: {
    currentPage: 1,
    totalPages: null,
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
      // .addCase(setTotalPages, (state, action: PayloadAction<number>) => {
      //   state.pagination.totalPages = action.payload;
      // });
      .addCase(
        setTotalPages,
        (state, action: PayloadAction<TotalPagesPayloadType>) => {
          const { limit, total_count } = action.payload;
          state.pagination.totalPages = Math.ceil(total_count / limit);
        }
      );
  }
);

const getPagination = ({ pagination }: { pagination: PaginationStateType }) =>
  pagination.pagination;

export const selectors = { getPagination };
