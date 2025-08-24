import { auctionDetailsPageHandler } from "../shared/handlers/auctions/auctionDetailsPageHandler.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";

export const initAuctionDetailsPage = () => {
  console.log("init Item detail page");
  toggleMobileNav();
  auctionDetailsPageHandler();
};
