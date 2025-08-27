/**
 * Removes the text content from a message container and hides it by adding a 'hidden' class.
 *
 * @param {string} messageCont - CSS selector string for the message container element
 * @throws {TypeError} Throws an error if the element matching the selector is not found
 * @example
 * // Hide and clear a message container
 * removeMessage('.error-message');
 * removeMessage('#notification-container');
 */
export const removeMessage = (messageCont) => {
  const messageContainer = document.querySelector(messageCont);
  messageContainer.innerText = "";
  messageContainer.classList.add("hidden");
};
