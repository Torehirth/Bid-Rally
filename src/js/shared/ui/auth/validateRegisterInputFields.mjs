import { isEmailValid } from "../../utils/common/isEmailValid.mjs";
import { isImageUrlValid } from "../../utils/common/isImageUrlValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

/**
 * Validates registration input fields and displays appropriate error messages.
 *
 * This function validates the name, email, password, and avatar fields from the registration form.
 * It checks for required fields, minimum length requirements, valid email format, and valid image URLs.
 * Error messages are displayed for invalid inputs and removed for valid ones.
 *
 * @function validateRegisterInputFields
 * @returns {boolean} Returns true if all input fields are valid, false otherwise
 *
 * @description
 * Validation rules:
 * - Name: Required, minimum 2 characters (spaces removed)
 * - Email: Required, must be valid format ending with @stud.noroff.no (spaces removed)
 * - Password: Required, minimum 8 characters (spaces removed)
 * - Avatar: Optional, but if provided must be a valid image URL (spaces removed)
 *
 * @example
 * // Call validation on form submission
 * if (validateRegisterInputFields()) {
 *   // Proceed with registration
 *   submitRegistration();
 * } else {
 *   // Handle validation errors (messages already displayed)
 *   console.log("Form validation failed");
 * }
 *
 * @requires setMessage - Function to display error messages
 * @requires removeMessage - Function to remove error messages
 * @requires isEmailValid - Function to validate email format
 * @requires isImageUrlValid - Function to validate image URL format
 *
 * @since 1.0.0
 */
export const validateRegisterInputFields = () => {
  const nameValue = document.querySelector("#name").value.trim().replace(/ /g, "");
  const emailValue = document.querySelector("#email").value.trim().replace(/ /g, "");
  const passwordValue = document.querySelector("#password").value.trim().replace(/ /g, "");
  const avatarValue = document.querySelector("#avatar").value.trim().replace(/ /g, "");

  let isValid = true;

  if (nameValue === "") {
    isValid = false;
    setMessage("#name-message", "Your name is required");
  } else if (nameValue.length < 2) {
    isValid = false;
    setMessage("#name-message", "Your name must be at least 2 characters long");
  } else {
    removeMessage("#name-message");
  }

  if (emailValue.length === 0 || emailValue === "") {
    isValid = false;
    setMessage("#email-message", "Your email address is required");
  } else if (!isEmailValid(emailValue)) {
    isValid = false;
    setMessage("#email-message", "Valid email required (example@stud.noroff.no)");
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

  if (!avatarValue) {
    removeMessage("#avatar-message");
  } else if (!isImageUrlValid(avatarValue)) {
    isValid = false;
    setMessage("#avatar-message", "avatar must be a complete URL to an image");
  }

  return isValid;
};
