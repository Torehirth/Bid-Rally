import { handleUserRegistration } from "../shared/handlers/auth/handleUserRegistration.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initRegisterPage = () => {
  toggleMobileNav();
  handleUserRegistration();
  updateCopyright();
  console.log("init register page");
};
