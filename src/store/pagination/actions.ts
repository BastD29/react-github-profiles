import { createAction } from "@reduxjs/toolkit";

const setCurrentPage = createAction<number>("pagination/setCurrentPage");
const setTotalPages = createAction<number>("pagination/setTotalPages");

export { setCurrentPage, setTotalPages };
