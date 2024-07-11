import { Effect, call, fork, put, takeLatest } from "redux-saga/effects";
import { GithubProfileType } from "../../models/github";
import { getUsers } from "../../services/github";
import {
  fetchProfilesFailure,
  fetchProfilesStart,
  fetchProfilesSuccess,
} from "./actions2";

export const SAGA_FLOW_NAME = {
  GET_GITHUB_PROFILES: "GET_GITHUB_PROFILES",
};

function* getGithubProfiles(): Generator<Effect, void, GithubProfileType[]> {
  try {
    yield put(fetchProfilesStart(true));
    const users = yield call(getUsers);
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
