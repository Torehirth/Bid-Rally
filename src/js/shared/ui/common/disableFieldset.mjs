/**
 * Disables or enables a fieldset and its submit button with visual feedback.
 *
 * @param {boolean} state - Whether to disable (true) or enable (false) the fieldset
 * @param {string} buttonText - The text to display on the submit button
 * @param {string|number} opacity - The CSS opacity value to apply to the fieldset (e.g., "0.5" or 0.5)
 *
 * @description
 * This function finds the first fieldset and button elements in the document and:
 * - Sets the fieldset's disabled state
 * - Updates the fieldset's opacity for visual feedback
 * - Changes the submit button's text content
 * - Adds/removes pointer-events-none class based on disabled state
 *
 * @example
 * // Disable fieldset with loading state
 * disableFieldset(true, "Loading...", 0.5);
 *
 * // Re-enable fieldset
 * disableFieldset(false, "Submit", 1);
 *
 * @throws {Error} Logs error to console if fieldset or button elements are not found
 */
export const disableFieldset = (state, buttonText, opacity) => {
  const fieldset = document.querySelector("fieldset");
  const submitButton = document.querySelector("fieldset button");

  if (submitButton && fieldset) {
    fieldset.disabled = state;
    console.log(state);

    fieldset.style.opacity = opacity;
    submitButton.textContent = buttonText;
    fieldset.disabled
      ? submitButton.classList.add("pointer-events-none")
      : submitButton.classList.remove("pointer-events-none");
  } else {
    console.error("Fieldset or button not found");
    return;
  }
};
