import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAboutPage = () => {
  toggleMobileNav();
  updateCopyright();
  initAuthStates();
  logoutUser();
  console.log("init about page");
};
