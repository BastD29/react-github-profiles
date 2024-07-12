// import { PayloadAction, Reducer, createReducer } from "@reduxjs/toolkit";
// import { FilterStateType, FilterType } from "../../models/filter";
// import { clearFilter, setFilter } from "./actions";

// const initialState: FilterStateType = {
//   filters: null,
// };

// export const reducer: Reducer<FilterStateType> = createReducer(
//   initialState,
//   (builder) => {
//     builder
//       .addCase(setFilter, (state, action: PayloadAction<FilterType>) => {
//         state.filters = action.payload;
//       })
//       .addCase(clearFilter, (state) => {
//         state.filters = null;
//       });
//   }
// );
