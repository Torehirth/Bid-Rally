import { handleUserLogin } from "../shared/handlers/auth/handleUserLogin.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";

export const initLoginPage = () => {
  toggleMobileNav();
  handleUserLogin();
  console.log("init login page");
};
