import { fetchAuctionListings } from "../../api/auctions/fetchAuctionListings.mjs";
import { debounce } from "../../helper/debounce.mjs";
import { filterAndRenderListings } from "../../ui/auctions/auctionCards/filterAndRenderListings.mjs";

/**
 * Initializes a debounced search input listener for auction listings.
 *
 * When an element with id "search-input" exists on the page, this function
 * attaches an "input" event listener that debounces user typing (300ms)
 * and then:
 *  - fetches auction listings using `fetchAuctionListings(100, 1, "endsAt", "asc")`
 *  - extracts the current listings from the fetched response (`data?.data || []`)
 *  - passes the listings and the current input value to `filterAndRenderListings`
 *
 * Notes:
 *  - This function depends on the presence of `debounce`, `fetchAuctionListings`,
 *    and `filterAndRenderListings` in the surrounding scope.
 *  - No action is taken if no element with id "search-input" is found.
 *
 * @example
 * // Called once on app startup to wire up the search input:
 * searchInputListener();
 */
export const searchInputListener = () => {
  const searchInput = document.querySelector("#search-input");

  const runSearch = debounce(async (value) => {
    const data = await fetchAuctionListings(100, 1, "endsAt", "asc");
    const currentListings = data?.data || [];
    filterAndRenderListings(currentListings, value);
  }, 300);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      runSearch(e.target.value);
    });
  }
};
