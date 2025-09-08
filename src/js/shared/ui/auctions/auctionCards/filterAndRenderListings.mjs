import { fetchAuctionListings } from "../../../api/auctions/fetchAuctionListings.mjs";
import { matchesSearch } from "../../../utils/auctions/matchesSearch.mjs";
import { displayMessage } from "../../../utils/common/displayMessage.mjs";
import { renderAuctionCards } from "./renderAuctionCards.mjs";

/**
 * Filters and renders auction listings based on a search term.
 *
 * This async function updates the DOM by querying and manipulating the following elements:
 * - "#auctions-grid" (container where auction cards are rendered)
 * - "#load-more-btn" (button shown when full listing set is displayed)
 * - "#listing-number-paragraph" (paragraph showing number/summary of listings)
 * - "#message" (info/error message area)
 *
 * Behavior:
 * - If no searchTerm is provided (falsy), the function will:
 *   - Fetch a default page of auction listings via fetchAuctionListings(15, 1, "endsAt", "asc").
 *   - Use the fetched data.data array as the listings to render.
 *   - Clear the listings container before rendering.
 *   - Ensure the "load more" button and listing-number paragraph are visible.
 * - If a searchTerm is provided:
 *   - Clear the listings container, then filter the provided allListings array using matchesSearch(searchTerm, listing).
 *   - Use the filtered results as the listings to render.
 *   - Hide the "load more" button (since pagination isn't used for filtered results).
 * - If the resulting listings array is empty, an informational message is displayed via displayMessage("#message", "info", `The search term ${searchTerm} gave no results`).
 *   Otherwise, the message area is cleared.
 * - Finally, the function renders the determined listings with renderAuctionCards(searchedListings, listingsContainer).
 *
 * Notes:
 * - This function has side effects on the DOM and depends on the following external helpers being available in scope:
 *   fetchAuctionListings, matchesSearch, displayMessage, renderAuctionCards.
 * - The function does not return data; it resolves when rendering and DOM updates are complete.
 *
 * @async
 * @param {Array<Object>} allListings - The full list of auction listing objects to filter from when a search term is provided.
 * @param {string} [searchTerm] - Optional search term; when omitted or falsy the function fetches a default listing page instead of filtering.
 * @returns {Promise<void>} Resolves when the DOM has been updated and listings have been rendered.
 * @throws {Error} May throw if required DOM elements are not found or if fetchAuctionListings rejects.
 */
export const filterAndRenderListings = async (allListings, searchTerm) => {
  const listingsContainer = document.querySelector("#auctions-grid");
  const loadMoreBtn = document.querySelector("#load-more-btn");
  const numberParagraph = document.querySelector("#listing-number-paragraph");
  let searchedListings = [];

  const data = await fetchAuctionListings(15, 1, "endsAt", "asc");

  numberParagraph.classList.add("hidden");

  if (!searchTerm) {
    listingsContainer.innerHTML = "";

    searchedListings = data?.data || [];

    loadMoreBtn.classList.remove("hidden");
    numberParagraph.classList.remove("hidden");
  } else {
    listingsContainer.innerHTML = "";
    const filteredListings = allListings.filter((listing) => matchesSearch(searchTerm, listing));
    searchedListings = filteredListings;

    loadMoreBtn.classList.add("hidden");
  }

  if (!searchedListings.length) {
    displayMessage("#message", "info", `The search term ${searchTerm} gave no results`);
  } else {
    document.querySelector("#message").classList = "";
    document.querySelector("#message").textContent = "";
  }

  renderAuctionCards(searchedListings, listingsContainer);
};
