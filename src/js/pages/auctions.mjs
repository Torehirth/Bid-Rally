import { auctionCardsHandler } from "../shared/handlers/auctions/auctionCardsHandler.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

export const initAuctionsPage = async () => {
  toggleMobileNav();
  auctionCardsHandler();
  updateCopyright();
  console.log("init Auctions page");
};
