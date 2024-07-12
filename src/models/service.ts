import { GithubProfileType } from "./github";

type GithubApiResponseType = {
  total_count: number;
  incomplete_results: boolean;
  items: GithubProfileType[];
};

export type { GithubApiResponseType };
