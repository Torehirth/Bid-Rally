import { isEmailValid } from "../../utils/common/isEmailValid.mjs";
import { isImageUrlValid } from "../../utils/common/isImageUrlValid.mjs";
import { setError } from "../../utils/common/setError.mjs";
import { setSuccess } from "../../utils/common/setSuccess.mjs";

export const validateRegisterInputFields = () => {
  const nameValue = document.querySelector("#name").value.trim().replace(/ /g, "");
  const emailValue = document.querySelector("#email").value.trim().replace(/ /g, "");
  const passwordValue = document
    .querySelector("#password")
    .value.trim()
    .replace(/ /g, "");
  const avatarValue = document.querySelector("#avatar").value.trim().replace(/ /g, "");

  if (nameValue === "") {
    setError("#name-error", "#name-info", "Your name is required");
  } else if (nameValue.length < 2) {
    setError("#name-error", "#name-info", "Your name must be at least 2 characters long");
  } else {
    setSuccess("#name-error", "#name-info");
  }

  if (emailValue.length === 0 || emailValue === "") {
    setError("#email-error", "#email-info", "Your email address is required");
  } else if (!isEmailValid(emailValue)) {
    setError(
      "#email-error",
      "#email-info",
      `Provide a valid email address ending with ....@stud.noroff.no`
    );
  } else {
    setSuccess("#email-error", "#email-info");
  }

  if (passwordValue === "") {
    setError("#password-error", "#password-info", "A password is required");
  } else if (passwordValue.length <= 8) {
    setError(
      "#password-error",
      "#password-info",
      "password must be at least 8 characters long"
    );
  } else {
    setSuccess("#password-error", "#password-info");
  }

  if (!avatarValue) {
    setSuccess("#avatar-error", "#avatar-info");
  } else if (!isImageUrlValid(avatarValue)) {
    setError(
      "#avatar-error",
      "#avatar-info",
      "avatar must be a complete URL to an image"
    );
  }
};
