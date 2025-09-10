import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { fetchUser } from "../shared/api/profile/fetchUser.mjs";
import { redirectUsersByAuthProfilePage } from "../shared/handlers/auth/redirectUsersByAuthProfilePage.mjs";
import { handleAvatarSubmit } from "../shared/handlers/profile/handleAvatarSubmit.mjs";
import { handleUsersAuctionCards } from "../shared/handlers/profile/handleUserAuctionCards.mjs";
import { handleUserUIUpdates } from "../shared/handlers/profile/handleUserUIUpdates.mjs";
import { closeModalListener } from "../shared/listeners/profile/closeModalListener.mjs";
import { openModalListener } from "../shared/listeners/profile/openModalListener.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initProfilePage = () => {
  toggleMobileNav();
  fetchUser();
  handleUserUIUpdates();
  updateCopyright();
  handleUsersAuctionCards();
  closeModalListener();
  openModalListener();
  handleAvatarSubmit();
  logoutUser();
  redirectUsersByAuthProfilePage();
  initAuthStates();
  renderUserButtonsInNav("../login/", "../register/", "../profile/");
};
