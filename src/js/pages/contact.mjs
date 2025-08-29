import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initContactPage = () => {
  toggleMobileNav();
  updateCopyright();
  console.log("init Contact page");
};
