import { fetchAuctionListings } from "../../api/auctions/fetchAuctionListings.mjs";
import { renderAuctionCards } from "../../ui/auctions/auctionCards/renderAuctionCards.mjs";
import { displayListingData } from "../../ui/auctions/displayListingData.mjs";
import { displayMessage } from "../../utils/common/displayMessage.mjs";

/**
 * Render a page of auction listings into the auctions grid.
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
 * @returns {Promise<void>} Resolves when rendering (or error handling) completes.
 * @see fetchAuctionListings
 * @see renderAuctionCards
 */
export const renderAuctionPage = async (page, sort, sortOrder) => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const loadMoreBtn = document.querySelector("#load-more-btn");
  const gridContainer = document.querySelector("#auctions-grid");

  if (page === 1) {
    listingsContainer.innerHTML = "";
  }

  try {
    const perPage = 15;
    loadMoreBtn.disabled = true;

    const newListings = await fetchAuctionListings(perPage, page, sort, sortOrder);

    renderAuctionCards(newListings, gridContainer);

    if (newListings.length < perPage) {
      loadMoreBtn.classList.add("hidden"); // last page
    } else {
      loadMoreBtn.disabled = false;
    }
  } catch (err) {
    loadMoreBtn.disabled = false;
    console.error(err);
    displayMessage("#message", "error", "Could not fetch the listings");
  }
};
