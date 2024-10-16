import { call, delay, fork, put, select, takeLatest } from "redux-saga/effects";
import { getUsers } from "../../services/github";
import {
  fetchProfilesFailure,
  fetchProfilesStart,
  fetchProfilesSuccess,
} from "./actions";
import { filterSelectors } from "../filter";
import { FilterType } from "../../models/filter";
import { PaginationType } from "../../models/pagination";
import { paginationSelectors } from "../pagination";
import { setCurrentPage, setTotalPages } from "../pagination/actions";
import { GithubApiResponseType } from "../../models/service";

export const SAGA_FLOW_NAME = {
  GET_GITHUB_PROFILES: "GET_GITHUB_PROFILES",
};

function* getGithubProfiles() {
  try {
    yield put(fetchProfilesStart(true));
    let filters: FilterType | null = yield select(filterSelectors.getFilters);
    const pagination: PaginationType = yield select(
      paginationSelectors.getPagination
    );

    // q param being absent gives a 422 error, so we have to give it a default value
    if (filters) {
      filters = { ...filters, q: filters.q?.trim() || "type:user" };
      if (filters.q !== "type:user") {
        yield delay(500); // Debounce the query by 500ms if a search query is present
      }
    }

    const response: GithubApiResponseType = yield call(
      getUsers,
      filters || {},
      pagination
    );
    console.log("response:", response);
    yield put(fetchProfilesSuccess(response.items));

    yield put(
      setTotalPages({
        total_count: response.total_count,
        limit: pagination.limit,
      })
    );
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
  yield takeLatest(setCurrentPage.type, getGithubProfiles); // trigger a re-fetch when clicking page button
}

export const githubSagas = [fork(watchGetGithubProfile)];

export const githubFlows = {
  githubSagas,
};
