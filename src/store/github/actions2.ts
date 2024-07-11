import { createAction } from "@reduxjs/toolkit";
import { GithubProfileType } from "../../models/github";

const fetchProfilesStart = createAction<boolean>("github/fetchProfilesStart");
const fetchProfilesSuccess = createAction<GithubProfileType[]>(
  "github/fetchProfilesSuccess"
);
const fetchProfilesFailure = createAction<string>(
  "github/fetchProfilesFailure"
);

export { fetchProfilesStart, fetchProfilesSuccess, fetchProfilesFailure };
