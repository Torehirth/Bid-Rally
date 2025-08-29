import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAboutPage = () => {
  toggleMobileNav();
  updateCopyright();
  console.log("init about page");
};
