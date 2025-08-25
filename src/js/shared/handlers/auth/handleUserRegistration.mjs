import { registerUser } from "../../api/auth/registerUser.mjs";
import { validateRegisterInputFields } from "../../ui/auth/validateRegisterInputFields.mjs";
import { getUserData } from "../../utils/common/getUserData.mjs";

export const handleUserRegistration = () => {
  const form = document.querySelector("#register-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valid = validateRegisterInputFields();
    if (!valid) return;
    console.log(valid);

    const userData = getUserData(form);

    registerUser(userData);
  });
};
