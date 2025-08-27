import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { submitNewListing } from "../shared/listeners/submitNewListing.mjs";

export const initNewListingPage = () => {
  toggleMobileNav();
  updateCopyright();
  submitNewListing();
  console.log("init new listing page");
};
