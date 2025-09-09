import { handleUserRegistration } from "../shared/handlers/auth/handleUserRegistration.mjs";
import { redirectUsersByAuth } from "../shared/handlers/auth/redirectUsersByAuth.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initRegisterPage = () => {
  toggleMobileNav();
  handleUserRegistration();
  updateCopyright();
  redirectUsersByAuth();
  renderUserButtonsInNav("../login/", "../register/", "../profile/");
  console.log("init register page");
};
