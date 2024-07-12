import { createAction } from "@reduxjs/toolkit";
import { FilterPayloadType } from "../../models/filter";

const setFilter = createAction<FilterPayloadType>("filter/setFilter");
const clearFilter = createAction("filter/clearFilter");

export { setFilter, clearFilter };
