// import { GITHUB_API_BASE_URL, SEARCH, USERS } from "../constants/endpoints";
// import { FilterType } from "../models/filter";
// import { GithubProfileType } from "../models/github";
// import { PaginationType } from "../models/pagination";

// const getUsers = async (
//   filters: FilterType,
//   pagination: PaginationType
// ): Promise<GithubProfileType[]> => {
//   console.log("filters:", filters);
//   console.log("pagination:", pagination);

//   try {
//     const queryParams = new URLSearchParams({
//       ...filters,
//       page: pagination.currentPage.toString(),
//       per_page: pagination.limit.toString(),
//     }).toString();
//     console.log("queryParams:", queryParams);

//     const url = filters.q
//       ? `${GITHUB_API_BASE_URL}${SEARCH}${USERS}?${queryParams}`
//       : `${GITHUB_API_BASE_URL}${USERS}?${queryParams}`;

//     // console.log("fetched url:", url);

//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     const data = await response.json();
//     console.log("data from github service:", data);

//     const items: GithubProfileType[] = filters.q ? data.items : data;

//     return items;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };

// export { getUsers };
