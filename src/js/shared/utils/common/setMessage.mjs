/**
 * Sets a message in a specified container element and makes it visible.
 *
 * @param {string} messageCont - CSS selector string for the message container element
 * @param {string} message - The message text to display in the container
 * @returns {void}
 *
 * @example
 * // Display an error message
 * setMessage('.error-container', 'Something went wrong!');
 *
 * @example
 * // Display a success message
 * setMessage('#success-msg', 'Operation completed successfully');
 */
export const setMessage = (messageCont, message) => {
  const messageContainer = document.querySelector(messageCont);
  messageContainer.innerText = message;
  messageContainer.classList.remove("hidden");
};
