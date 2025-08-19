/**
 * Fetches data from an API endpoint and handles errors by updating the container element
 * @async
 * @function fetchAPI
 * @param {HTMLElement} container - The DOM element to display error messages in case of failure
 * @param {string} endpoint - The API endpoint path to fetch from
 * @param {string} [parameter=""] - Optional query parameters to append to the request URL, empty by default.
 * @returns {Promise<Object|undefined>} The JSON response from the API, or undefined if an error occurs
 * @throws {Error} Throws an error if the API response is not ok or if the fetch fails
 * @example
 * const container = document.getElementById('content');
 * const data = await fetchAPI(container, 'users', 'limit=10&sort=name');
 */
export const fetchAPI = async (container, endpoint, parameter = "") => {
  const baseAPIUrl = import.meta.env.VITE_API_BASE_URL;

  try {
    const response = await fetch(`${baseAPIUrl}/${endpoint}?${parameter}`);

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Fetch failed");
    }
    console.log(json);

    return json;
  } catch (err) {
    container.innerHTML =
      "OOOps! Error when fetching the API! Try again later..";
    console.error(err);
  }
};
