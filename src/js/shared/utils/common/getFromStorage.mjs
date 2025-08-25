/**
 * Retrieves a value from the browser's localStorage by the specified key.
 *
 * @param {string} key - The key to retrieve the value from localStorage
 * @returns {string|null} The value associated with the key, or null if the key doesn't exist
 *
 * @example
 * // Get user data from localStorage
 * const userData = getFromStorage('user');
 *
 * @example
 * // Get authentication token
 * const token = getFromStorage('authToken');
 */
export const getFromStorage = (key) => {
  return localStorage.getItem(key);
};
