import { GITHUB_API_BASE_URL, USERS } from "../constants/endpoints";
import { GithubProfileType } from "../models/github";

const getUsers = async (): Promise<GithubProfileType[]> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}${USERS}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data: GithubProfileType[] = await response.json();
    console.log("data from github service:", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };
