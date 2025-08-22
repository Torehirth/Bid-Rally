import { validateRegisterInputFields } from "../../ui/common/validateRegisterInputFields.mjs";

export const submitRegisterForm = () => {
  document.querySelector("#register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    validateRegisterInputFields();
  });
};
