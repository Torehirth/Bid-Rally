import { auctionCardsHandler } from "../shared/handlers/auctions/auctionCardsHandler.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";

export const initAuctionsPage = async () => {
  console.log("init Auctions page");
  toggleMobileNav();
  auctionCardsHandler();
};
