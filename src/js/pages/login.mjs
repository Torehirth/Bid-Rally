import { handleUserLogin } from "../shared/handlers/auth/handleUserLogin.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initLoginPage = () => {
  toggleMobileNav();
  handleUserLogin();
  updateCopyright();
  console.log("init login page");
};
