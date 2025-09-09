import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { submitNewListing } from "../shared/listeners/auctions/submitNewListing.mjs";
import { redirectUsersByAuth } from "../shared/handlers/auth/redirectUsersByAuth.mjs";

export const initNewListingPage = () => {
  toggleMobileNav();
  updateCopyright();
  submitNewListing();
  logoutUser();
  redirectUsersByAuth();
  console.log("init new listing page");
};
