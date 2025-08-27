import { isEmailValid } from "../../utils/common/isEmailValid.mjs";
import { removeMessage } from "../../utils/common/removeMessage.mjs";
import { setMessage } from "../../utils/common/setMessage.mjs";

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
