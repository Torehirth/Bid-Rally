import { getFromStorage } from "../../utils/common/getFromStorage.mjs";
import { fetchAPI } from "../fetchAPI.mjs";

/**
 * Fetches user profile data from the API
 *
 * @async
 * @function fetchUser
 * @returns {Promise<Object|undefined>} The user profile data object, or undefined if an error occurs
 * @throws {Error} Logs error to console if API request fails or user data cannot be retrieved
 *
 * @description
 * Retrieves the current user's name from local storage and fetches their complete profile
 * data from the auction profiles API endpoint. Displays loading state in the user info container.
 *
 * @example
 * const user = await fetchUser();
 * if (user) {
 *   console.log(user.name, user.email);
 * }
 */
export const fetchUser = async () => {
  const userInfoContainer = document.querySelector("#user-info");
  const { name } = getFromStorage("user");

  try {
    const userData = await fetchAPI(userInfoContainer, `auction/profiles/${name}`);

    return userData?.data;
  } catch (err) {
    console.error(err.message || "Could not fetch user");
  }
};
