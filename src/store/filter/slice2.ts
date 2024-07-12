import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
import { FilterPayloadType, FilterStateType } from "../../models/filter";
import { clearFilter, setFilter } from "./actions2";

const initialState: FilterStateType = {
  filters: null,
};

export const reducer: Reducer<FilterStateType> = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(setFilter, (state, action: PayloadAction<FilterPayloadType>) => {
        if (state.filters) {
          state.filters[action.payload.name] = action.payload.value;
        } else {
          state.filters = { [action.payload.name]: action.payload.value };
        }
      })
      .addCase(clearFilter, (state) => {
        state.filters = null;
      });
  }
);
