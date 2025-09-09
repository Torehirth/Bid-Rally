import { handleUserLogin } from "../shared/handlers/auth/handleUserLogin.mjs";
import { redirectUsersByAuth } from "../shared/handlers/auth/redirectUsersByAuth.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initLoginPage = () => {
  toggleMobileNav();
  handleUserLogin();
  updateCopyright();
  redirectUsersByAuth();
  renderUserButtonsInNav("../login/", "../register/", "../profile/");
  console.log("init login page");
};
