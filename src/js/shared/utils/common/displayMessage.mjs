/**
 * Displays a message in a specified container with appropriate styling based on message type.
 *
 * @param {string|HTMLElement} container - The container element or CSS selector string where the message will be displayed
 * @param {string} messageType - The type of message ('error', 'warning', or 'success') which determines the styling class
 * @param {string} message - The text content of the message to display
 *
 * @example
 * // Using CSS selector
 * displayMessage('.message-container', 'success', 'Operation completed successfully');
 *
 * @example
 * // Using HTML element
 * const element = document.getElementById('messageDiv');
 * displayMessage(element, 'error', 'Something went wrong');
 */
export const displayMessage = (container, messageType, message) => {
  // Handles inserting container as string or as an HTML element.
  let messageContainer = container;
  if (typeof messageContainer === "string") {
    messageContainer = document.querySelector(container);
  }

  messageContainer.classList.add(messageType);
  messageContainer.innerText = message;
  messageContainer.setAttribute("role", "alert");
  messageContainer.setAttribute("aria-live", "polite");
};
