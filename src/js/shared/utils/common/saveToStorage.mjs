/**
 * Saves a value to localStorage with the specified key.
 *
 * @param {string} key - The key under which to store the value in localStorage
 * @param {any} value - The value to store in localStorage (will be JSON stringified)
 * @returns {void}
 * @example
 * saveToStorage('userToken', 'abc123');
 * saveToStorage('user', { id: 1, name: 'John' });
 */
export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
