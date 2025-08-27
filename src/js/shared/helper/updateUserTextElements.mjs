/**
 * Updates the text content of a DOM element with the provided value.
 *
 * @function updateUserTextElements
 * @param {string} element - The CSS selector string for the target DOM element
 * @param {string} [value=""] - The text content to set. Function returns early if null, undefined, or empty string
 * @returns {void}
 *
 * @example
 * // Update a heading element
 * updateUserTextElements('#username', 'John Doe');
 *
 * @example
 * // Function will return early with empty value
 * updateUserTextElements('.title', ''); // No update occurs
 */
export const updateUserTextElements = (element, value = "") => {
  const textElement = document.querySelector(element);
  if (value === null || value === undefined || value === "") {
    return;
  }
  textElement.textContent = value;
};
