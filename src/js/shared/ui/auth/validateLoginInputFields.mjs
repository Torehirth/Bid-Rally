import { isEmailValid } from "../../utils/common/isEmailValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

/**
 * Validates login input fields for email and password.
 *
 * This function retrieves values from email and password input fields,
 * validates them according to specific criteria, and displays appropriate
 * error messages if validation fails.
 *
 * @function validateLoginInputFields
 * @returns {boolean} Returns true if both email and password are valid, false otherwise
 *
 * @description
 * Email validation:
 * - Must not be empty
 * - Must be a valid email format ending with @stud.noroff.no
 *
 * Password validation:
 * - Must not be empty
 * - Must be at least 8 characters long
 *
 * @example
 * // Validate login form fields
 * const isFormValid = validateLoginInputFields();
 * if (isFormValid) {
 *   // Proceed with login
 * }
 *
 * @requires DOM elements with IDs: #email, #password
 * @requires Helper functions: isEmailValid, setMessage, removeMessage
 * @requires DOM elements for messages: #email-message, #password-message, #email-info
 */
export const validateLoginInputFields = () => {
  const emailValue = document.querySelector("#email").value.trim().toLowerCase().replace(/ /g, "");
  const passwordValue = document.querySelector("#password").value.trim().replace(/ /g, "");

  let isValid = true;

  if (emailValue.length === 0 || emailValue === "") {
    isValid = false;
    setMessage("#email-message", "Your email address is required");
  } else if (!isEmailValid(emailValue)) {
    isValid = false;
    setMessage("#email-message", "Provide a valid email address ending with ....@stud.noroff.no");
  } else {
    removeMessage("#email-message", "#email-info");
  }

  if (passwordValue === "") {
    isValid = false;
    setMessage("#password-message", "A password is required");
  } else if (passwordValue.length < 8) {
    isValid = false;
    setMessage("#password-message", "password must be at least 8 characters long");
  } else {
    removeMessage("#password-message");
  }
  return isValid;
};
