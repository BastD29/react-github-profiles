import { GITHUB_API_BASE_URL, SEARCH, USERS } from "../constants/endpoints";
import { FilterType } from "../models/filter";
import { GithubProfileType } from "../models/github";
import { GithubApiResponseType } from "../models/service";

// getUsers with filters

const getUsers = async (filters: FilterType): Promise<GithubProfileType[]> => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    console.log("queryParams:", queryParams);

    const response = await fetch(
      `${GITHUB_API_BASE_URL}${SEARCH}${USERS}?${queryParams}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: GithubApiResponseType = await response.json();
    console.log("data from github service:", data);
    // data from github service: {total_count: 0, incomplete_results: false, items: Array(0)}

    const { items } = data;

    return items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };
