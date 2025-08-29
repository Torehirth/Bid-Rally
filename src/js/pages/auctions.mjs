import { auctionCardsHandler } from "../shared/handlers/auctions/auctionCardsHandler.mjs";
import { toggleMobileNav } from "../shared/listeners/toggleMobileNav.mjs";
import { updateCopyright } from "../shared/utils/common/updateCopyright.mjs";

/**
 * Initialize the Auctions page.
 *
 * Performs the setup required when the auctions page is loaded:
 * - Enables mobile navigation toggling by calling `toggleMobileNav`
 * - Sets up auction cards and related handlers via `auctionCardsHandler`
 * - Updates copyright information via `updateCopyright`
 * - Logs an initialization message to the console
 *
 * This function is asynchronous to allow for any future asynchronous initialization
 * steps; currently it starts the setup tasks and returns a resolved promise.
 *
 * @async
 * @function initAuctionsPage
 * @returns {Promise<void>} Resolves when initialization tasks have been initiated/completed.
 */
export const initAuctionsPage = async () => {
  toggleMobileNav();
  auctionCardsHandler();
  updateCopyright();
  console.log("init Auctions page");
};
