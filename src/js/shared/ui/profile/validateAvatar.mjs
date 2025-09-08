import { isImageUrlValid } from "../../utils/common/isImageUrlValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

/**
 * Validate the avatar input field and update related UI messages.
 *
 * Reads the value from the #avatar input, trims and removes spaces, then
 * validates it with isImageUrlValid. If invalid, sets an error message on
 * #avatar-message and removes #info-message; if valid, clears #avatar-message.
 *
 * @returns {boolean} True if the avatar value is a complete and valid image URL, otherwise false.
 */
export const validateAvatarField = () => {
  const avatarValue = document.querySelector("#avatar").value.trim().replace(/ /g, "");
  let isValid = true;

  if (!avatarValue || !isImageUrlValid(avatarValue)) {
    isValid = false;
    setMessage("#avatar-message", "Avatar must be a complete and valid URL to an image");
    removeMessage("#info-message");
  } else {
    removeMessage("#avatar-message");
  }
  return isValid;
};
