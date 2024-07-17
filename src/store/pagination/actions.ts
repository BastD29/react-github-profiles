import { createAction } from "@reduxjs/toolkit";
import { TotalPagesPayloadType } from "../../models/pagination";

const setCurrentPage = createAction<number>("pagination/setCurrentPage");

const setTotalPages = createAction<TotalPagesPayloadType>(
  "pagination/setTotalPages"
);

export { setCurrentPage, setTotalPages };
