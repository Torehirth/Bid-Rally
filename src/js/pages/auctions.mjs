import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";
import { initAuctionPagination } from "../shared/listeners/auctions/initAuctionPagination.mjs";
import { searchInputListener } from "../shared/listeners/auctions/searchInputListener.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";

export const initAuctionsPage = async () => {
  toggleMobileNav();
  updateCopyright();
  initAuctionPagination();
  searchInputListener();
  initAuthStates();
  logoutUser();
  renderUserButtonsInNav("../login/", "../register/", "../profile/");
};
