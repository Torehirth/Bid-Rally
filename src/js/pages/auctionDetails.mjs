import { auctionDetailsPageHandler } from "../shared/handlers/auctions/auctionDetailsPageHandler.mjs";
import { submitBid } from "../shared/listeners/auctions/submitBid.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

/**
 * Initialize the auction details page.
 *
 * Performs the setup tasks required when the auction details page is loaded:
 * - toggles the mobile navigation state
 * - initializes auction details page handlers
 * - updates the page footer/copyright
 * - attaches bid submission behavior
 * - logs a debug message to the console
 *
 * This function takes no parameters and returns nothing.
 *
 * @export
 * @function initAuctionDetailsPage
 * @returns {void}
 */
export const initAuctionDetailsPage = () => {
  toggleMobileNav();
  auctionDetailsPageHandler();
  updateCopyright();
  submitBid();
  console.log("init Item detail page");
};
