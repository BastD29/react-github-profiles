// import { Effect, call, fork, put, takeLatest } from "redux-saga/effects";
// import { GithubProfileType } from "../../models/github";
// import { getUsers } from "../../services/github";
// import { githubActions } from ".";

// export const SAGA_FLOW_NAME = {
//   GET_GITHUB_PROFILES: "GET_GITHUB_PROFILES",
// };

// function* getGithubProfiles(): Generator<Effect, void, GithubProfileType[]> {
//   try {
//     yield put(githubActions.fetchProfilesStart(true));
//     const users = yield call(getUsers);
//     console.log("response:", users);
//     yield put(githubActions.fetchProfilesSuccess(users));
//   } catch (error) {
//     if (error instanceof Error) {
//       yield put(githubActions.fetchProfilesFailure(error.message));
//     } else {
//       yield put(
//         githubActions.fetchProfilesFailure("An unknown error occurred")
//       );
//     }
//   } finally {
//     yield put(githubActions.fetchProfilesStart(false));
//   }
// }

// function* watchGetGithubProfile() {
//   yield takeLatest(SAGA_FLOW_NAME.GET_GITHUB_PROFILES, getGithubProfiles);
// }

// export const githubSagas = [fork(watchGetGithubProfile)];

// export const githubFlows = {
//   githubSagas,
// };
