import { isEmailValid } from "../../utils/common/isEmailValid.mjs";
import { isImageUrlValid } from "../../utils/common/isImageUrlValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

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
    setMessage(
      "#email-message",
      "Provide a valid email address ending with ....@stud.noroff.no"
    );
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
