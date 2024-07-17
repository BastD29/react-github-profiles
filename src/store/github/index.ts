import {
  githubFlows as _githubFlows,
  githubSagas as _githubSagas,
} from "./sagas";

const githubSagas = [..._githubSagas];
const githubFlows = { ..._githubFlows };

export { githubSagas, githubFlows };
