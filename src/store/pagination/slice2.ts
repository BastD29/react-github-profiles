import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import {
  PaginationStateType,
  TotalPagesPayloadType,
} from "../../models/pagination";
import { setCurrentPage, setTotalPages } from "./actions";
import { getVisiblePages } from "../../utils/getVisiblePages";

const initialState: PaginationStateType = {
  pagination: {
    currentPage: 1,
    totalPages: null,
    limit: 6, // items per page
    visiblePages: [],
  },
};

export const reducer: Reducer<PaginationStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setCurrentPage, (state, action: PayloadAction<number>) => {
        state.pagination.currentPage = action.payload;
        if (state.pagination.totalPages !== null) {
          state.pagination.visiblePages = getVisiblePages(
            action.payload,
            state.pagination.totalPages
          );
        }
      })
      .addCase(
        setTotalPages,
        (state, action: PayloadAction<TotalPagesPayloadType>) => {
          const { limit, total_count } = action.payload;
          state.pagination.totalPages = Math.ceil(total_count / limit);
          state.pagination.visiblePages = getVisiblePages(
            state.pagination.currentPage,
            state.pagination.totalPages
          );
        }
      );
  }
);

const getPagination = ({ pagination }: { pagination: PaginationStateType }) =>
  pagination.pagination;

export const selectors = { getPagination };
