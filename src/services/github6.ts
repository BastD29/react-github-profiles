import { GITHUB_API_BASE_URL, SEARCH, USERS } from "../constants/endpoints";
import { FilterType } from "../models/filter";
import { GithubProfileType } from "../models/github";
import { PaginationType } from "../models/pagination";

const getUsers = async (
  filters: FilterType,
  pagination: PaginationType
): Promise<GithubProfileType[]> => {
  console.log("filters:", filters);
  console.log("pagination:", pagination);

  try {
    // const query = filters.q || "type:user";
    const query = filters.q?.trim() || "type:user";
    const queryParams = new URLSearchParams({
      q: query, // ensure that a q parameter is always included in the query string
      ...filters,
      page: pagination.currentPage.toString(),
      per_page: pagination.limit.toString(),
    }).toString();
    console.log("queryParams:", queryParams);

    const url = `${GITHUB_API_BASE_URL}${SEARCH}${USERS}?${queryParams}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log("data from github service:", data);

    const items: GithubProfileType[] = data.items;

    return items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };
