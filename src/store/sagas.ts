import { all } from "redux-saga/effects";
import { githubSagas } from "./github/sagas3";

export default function* rootSaga() {
  yield all([...githubSagas]);
}
