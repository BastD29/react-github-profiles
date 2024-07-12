import { createAction } from "@reduxjs/toolkit";
import { FilterType } from "../../models/filter";

const setFilter = createAction<FilterType>("filter/setFilter");
const clearFilter = createAction("filter/clearFilter");

export { setFilter, clearFilter };
