// import { searchInputListener } from "../../../pages/auctions.mjs";
import { fetchAuctionListings } from "../../api/auctions/fetchAuctionListings.mjs";
import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";

/**
 * Render all the auction listings into the auction cotainer grid.
 *
 * This async function:
 * - Selects DOM elements (#auctions-grid, #load-more-btn).
 * - Clears the listings container if requesting the first page (page === 1).
 * - Disables the "Load more" button while fetching.
 * - Fetches listings using fetchAuctionListings(perPage, page) with a limit = 15 (perPage).
 * - Renders fetched listings into the grid using renderAuctionCards(listings, gridContainer).
 * - If fewer than `perPage` items are returned, treats this as the last page and hides the button;
 *   otherwise re-enables the button.
 * - On error, re-enables the "Load more" button, logs the error, and displays an error message in the UI.
 *
 *   clears or appends to the auctions grid, toggles button disabled state,
 *   adds/removes the "hidden" class on the load-more button, and invokes a message display on failure.
 *
 * @async
 * @param {number} page - 1-based page index to load.
 * @param {string} sort - sort by object data like "endsAt".
 * @param {string} sortOrder - sort in ascending or descending order with "asc" or "desc".
 * @returns {Promise<void>} Resolves when rendering (or error handling) completes.
 * @see fetchAuctionListings
 * @see renderAuctionCards
 */

export const renderAuctionPage = async (page, sort, sortOrder) => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const loadMoreBtn = document.querySelector("#load-more-btn");

  if (page === 1) {
    listingsContainer.innerHTML = "";
  }

  try {
    const perPage = 15;
    loadMoreBtn.disabled = true;

    const data = await fetchAuctionListings(perPage, page, sort, sortOrder);
    const newListings = data?.data || [];

    renderAuctionCards(newListings, listingsContainer, "../auctions/item.html");

    if (newListings.length < perPage) {
      loadMoreBtn.classList.add("hidden"); // last page
    } else {
      loadMoreBtn.disabled = false;
    }
  } catch {
    loadMoreBtn.disabled = false;
    displayMessage("#message", "error", "Could not fetch the listings");
  }
};
