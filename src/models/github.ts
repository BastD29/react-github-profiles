type GithubInitialStateType = {
  profiles: GithubProfileType[] | null;
  loading: boolean;
  error: string | null;
};

type GithubProfileType = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type { GithubInitialStateType, GithubProfileType };
