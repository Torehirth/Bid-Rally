import { fetchUserListings } from "../../api/profile/fetchUserListings.mjs";
import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";

/**
 * Fetches the current user's auction listings and renders them into the DOM.
 *
 * The function:
 *  - selects the container with id "auctions-grid",
 *  - fetches the user's listings via `fetchUserListings`,
 *  - renders the retrieved listings into the container using `renderAuctionCards`.
 *
 * This is an async operation; any errors thrown by `fetchUserListings` or
 * `renderAuctionCards` will propagate to the caller.
 *
 * @async
 * @function handleUsersAuctionCards
 * @returns {Promise<void>} Resolves once listings have been rendered (or rejects if an error occurs).
 * @throws {Error} If fetching or rendering fails.
 * @see fetchUserListings
 * @see renderAuctionCards
 */
export const handleUsersAuctionCards = async () => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const listings = await fetchUserListings(listingsContainer);

  renderAuctionCards(listings, listingsContainer);
};
