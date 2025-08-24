import { registerUser } from "../../api/auth/registerUser.mjs";
import { validateRegisterInputFields } from "../../ui/common/validateRegisterInputFields.mjs";
import { getUserData } from "../../utils/common/getUserData.mjs";

export const submitRegisterForm = () => {
  const form = document.querySelector("#register-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid = validateRegisterInputFields();
    if (!valid) return;

    const userData = getUserData(form);

    registerUser(userData);
  });
};
