import { loginUser } from "../../api/auth/loginUser.mjs";
import { validateLoginInputFields } from "../../ui/auth/validateLoginInputFields.mjs";
import { getUserData } from "../../utils/common/getUserData.mjs";

export const handleUserLogin = () => {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateLoginInputFields();
    if (!isValid) return;

    const userData = getUserData(form);
    loginUser(userData);
  });
};
