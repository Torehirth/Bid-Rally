import { fetchUser } from "../shared/api/profile/fetchUser.mjs";
import { handleUsersAuctionCards } from "../shared/handlers/user/handleUserAuctionCards.mjs";
import { handleUserUIUpdates } from "../shared/handlers/user/handleUserUIUpdates.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initProfilePage = () => {
  toggleMobileNav();
  fetchUser();
  handleUserUIUpdates();
  updateCopyright();
  handleUsersAuctionCards();
  console.log("init profile page");
};
