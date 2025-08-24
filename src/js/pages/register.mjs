import { submitRegisterForm } from "../shared/handlers/register/submitRegisterForm.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";

export const initRegisterPage = () => {
  toggleMobileNav();
  submitRegisterForm();
  console.log("init register page");
};
