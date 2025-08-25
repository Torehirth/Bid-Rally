import { handleUserRegistration } from "../shared/handlers/auth/handleUserRegistration.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";

export const initRegisterPage = () => {
  toggleMobileNav();
  handleUserRegistration();
  console.log("init register page");
};
