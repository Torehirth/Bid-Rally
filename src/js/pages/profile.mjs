import { fetchUser } from "../shared/api/profile/fetchUser.mjs";
import { handleUserUIUpdates } from "../shared/handlers/user/handleUserUIUpdates.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initProfilePage = () => {
  toggleMobileNav();
  fetchUser();
  handleUserUIUpdates();
  updateCopyright();
  console.log("init profile page");
};

// fetch user listings
// display listings with the same listing cards as the whole site
