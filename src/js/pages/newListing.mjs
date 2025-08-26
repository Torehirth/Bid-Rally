import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initNewListingPage = () => {
  toggleMobileNav();
  updateCopyright();
  console.log("init new listing page");
};
