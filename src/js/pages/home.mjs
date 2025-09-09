import { displayListingsEndingSoon } from "../shared/api/auctions/displayListingsEndingSoon.mjs";
import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initHomePage = () => {
  toggleMobileNav();
  updateCopyright();
  initAuthStates();
  logoutUser();
  renderUserButtonsInNav("./login/", "./register/", "./profile/");
  displayListingsEndingSoon();
  console.log("init Home page");
};
