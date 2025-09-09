import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initHomePage = () => {
  toggleMobileNav();
  updateCopyright();
  initAuthStates();
  console.log("init Home page");
};
