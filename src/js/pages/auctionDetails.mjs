import { auctionDetailsPageHandler } from "../shared/handlers/auctions/auctionDetailsPageHandler.mjs";
import { submitBid } from "../shared/listeners/auctions/submitBid.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { initAuthStates } from "../shared/ui/auth/initAuthStates.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAuctionDetailsPage = () => {
  toggleMobileNav();
  auctionDetailsPageHandler();
  updateCopyright();
  submitBid();
  initAuthStates();
  console.log("init Item detail page");
};
