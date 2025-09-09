import { handleUserRegistration } from "../shared/handlers/auth/handleUserRegistration.mjs";
import { redirectUsersByAuth } from "../shared/handlers/auth/redirectUsersByAuth.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initRegisterPage = () => {
  toggleMobileNav();
  handleUserRegistration();
  updateCopyright();
  redirectUsersByAuth();
  console.log("init register page");
};
