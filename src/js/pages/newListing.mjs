import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { submitNewListing } from "../shared/listeners/submitNewListing.mjs";
import { logoutUser } from "../shared/api/auth/logoutUser.mjs";

export const initNewListingPage = () => {
  toggleMobileNav();
  updateCopyright();
  submitNewListing();
  logoutUser();
  console.log("init new listing page");
};
