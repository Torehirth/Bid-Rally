import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initHomePage = () => {
  toggleMobileNav();
  updateCopyright();
  console.log("init Home page");
};
