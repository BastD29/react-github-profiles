// import { actions as githubActions, reducer as githubReducer } from "./slice";
import {
  githubFlows as _githubFlows,
  githubSagas as _githubSagas,
} from "./sagas2";

const githubSagas = [..._githubSagas];
const githubFlows = { ..._githubFlows };

export { githubSagas, githubFlows };
