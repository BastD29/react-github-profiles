import { all } from "redux-saga/effects";
import { githubSagas } from "./github/sagas4";

export default function* rootSaga() {
  yield all([...githubSagas]);
}
