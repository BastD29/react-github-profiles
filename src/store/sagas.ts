import { all } from "redux-saga/effects";
import { githubSagas } from "./github/sagas";

export default function* rootSaga() {
  yield all([...githubSagas]);
}
