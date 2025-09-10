import { displayListingsEndingSoon } from "../shared/api/auctions/displayListingsEndingSoon.mjs";
import { logoutUser } from "../shared/api/auth/logoutUser.mjs";
import { auctionDetailsPageHandler } from "../shared/handlers/auctions/auctionDetailsPageHandler.mjs";
import { submitBid } from "../shared/listeners/auctions/submitBid.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { renderUserButtonsInNav } from "../shared/ui/common/renderUserButtonsInNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAuctionDetailsPage = () => {
  toggleMobileNav();
  auctionDetailsPageHandler();
  updateCopyright();
  submitBid();
  initAuthStates();
  logoutUser();
  renderUserButtonsInNav("../login/", "../register/", "../profile/");
  displayListingsEndingSoon("../auctions/item.html");
};
