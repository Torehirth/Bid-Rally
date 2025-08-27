import { displayMessage } from "../utils/common/displayMessage.mjs";
import { requestOptions } from "./auth/requestOptions.mjs";

/**
 * Fetches data from the API and handles errors gracefully
 * @async
 * @function fetchAPI
 * @param {HTMLElement} container - The DOM element where error messages will be displayed
 * @param {string} endpoint - The API endpoint to fetch from (without leading slash)
 * @param {string} [parameter=""] - Optional query parameters to append to the request
 * @returns {Promise<Object|undefined>} The JSON response data if successful, undefined if error occurs
 * @throws {Error} Throws an error if the API response is not ok
 * @example
 * // Fetch user data
 * const usersContainer = document.querySelector("#users-container");
 * const userData = await fetchAPI(usersContainer, 'users/123');
 *
 * @example
 * // Fetch with query parameters
 * const postsContainer = document.querySelector("#posts-container");
 * const posts = await fetchAPI(
 *   postsContainer,
 *   'profile/posts',
 *   'limit=10&sort=created'
 * );
 */
export const fetchAPI = async (container, endpoint, parameter = "") => {
  const baseAPIUrl = import.meta.env.VITE_API_BASE_URL || "https://v2.api.noroff.dev";

  try {
    const response = await fetch(`${baseAPIUrl}/${endpoint}?${parameter}`, requestOptions());
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Fetch failed");
    }

    return json;
  } catch (err) {
    displayMessage(
      container,
      "error",
      err.message || "Something went wrong fetching the API. Try again later."
    );
    console.error(err.message);
  }
};
