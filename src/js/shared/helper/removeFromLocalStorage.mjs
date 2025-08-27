/**
 * Removes an item from localStorage by its key
 * @param {string} key - The key of the item to remove from localStorage
 * @returns {void}
 * @example
 * // Remove user data from localStorage
 * removeFromLocalStorage('userData');
 */
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
