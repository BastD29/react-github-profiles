import { call, delay, fork, put, select, takeLatest } from "redux-saga/effects";
import { GithubProfileType } from "../../models/github";
import { getUsers } from "../../services/github5";
import {
  fetchProfilesFailure,
  fetchProfilesStart,
  fetchProfilesSuccess,
} from "./actions2";
import { filterSelectors } from "../filter";
import { FilterType } from "../../models/filter";
import { PaginationType } from "../../models/pagination";
import { paginationSelectors } from "../pagination";

export const SAGA_FLOW_NAME = {
  GET_GITHUB_PROFILES: "GET_GITHUB_PROFILES",
};

function* getGithubProfiles() {
  try {
    yield put(fetchProfilesStart(true));
    const filters: FilterType | null = yield select(filterSelectors.getFilters);
    const pagination: PaginationType = yield select(
      paginationSelectors.getPagination
    );
    console.log("pagination:", pagination);

    if (filters && filters.q) {
      yield delay(500); // Debounce the query by 500ms
    }
    const users: GithubProfileType[] = yield call(
      getUsers,
      filters || {},
      pagination
    );
    console.log("response:", users);
    yield put(fetchProfilesSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchProfilesFailure(error.message));
    } else {
      yield put(fetchProfilesFailure("An unknown error occurred"));
    }
  } finally {
    yield put(fetchProfilesStart(false));
  }
}

function* watchGetGithubProfile() {
  yield takeLatest(SAGA_FLOW_NAME.GET_GITHUB_PROFILES, getGithubProfiles);
}

export const githubSagas = [fork(watchGetGithubProfile)];

export const githubFlows = {
  githubSagas,
};
